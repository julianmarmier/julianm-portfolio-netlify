const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // const options = {
  //   staticFolderName: "static",
  //   include: [],
  //   exclude: [],
  // }

  // fmImagesToRelative(node);

  // if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
  //   const files = getNodesByType(`File`);

  //   const directory = path.dirname(node.fileAbsolutePath);

  //   // Deeply iterate through frontmatter data for absolute paths
  //   traverse(node.frontmatter).forEach(function (value) {
  //     if (!isString(value)) return;
  //     if (!path.isAbsolute(value) || !path.extname(value)) return;

  //     // const paths = this.path.reduce<string[]>((acc, current) => {
  //     //   acc.push(acc.length > 0 ? [acc, current].join('.') : current);
  //     //   return acc;
  //     // }, []);

  //     let shouldTransform = options.include.length < 1;

  //     if (options.include.some((a) => paths.includes(a))) {
  //       shouldTransform = true;
  //     }

  //     if (options.exclude.some((a) => paths.includes(a))) {
  //       shouldTransform = false;
  //     }

  //     if (!shouldTransform) return;

  //     const file = findMatchingFile(value, files, options);

  //     const newValue = path.relative(directory, file.absolutePath);

  //     this.update(newValue);
  //   });
  // }

  // For the static.yml page: 

  // if (node.internal.type === `File` && node.name === `static`) {

  // }

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
