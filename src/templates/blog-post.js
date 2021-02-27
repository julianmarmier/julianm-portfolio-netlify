import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from '../components/layout'
import ImagePointer from '../components/imagePointer.js'

import styles from "../style/Post.module.scss"

import '../components/article.css'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout windowLoc="article">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div className={styles.grid}>
        <div className={`${styles.head} ${styles.full}`}>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </div>
        <div className={`${styles.left}`}>

        </div>
        <div className={`${styles.right}`}>
          <section className="art-main" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>

      <div className="art-background">
        {/* <ImagePointer imageFluid={ post.frontmatter.thumbnail } descriptionText={ post.frontmatter.description }/> */}

          <nav>
            <ul className="post-nav">
              <li>
                {next && (
                  <>
                  <p>←</p>
                  <Link to={next.fields.slug} className="next" rel="next">
                    {next.frontmatter.title}
                  </Link>
                  </>
                )}
              </li>
              <li>
                {previous && (
                  <>
                  <Link to={previous.fields.slug} className="prev" rel="prev">
                    {previous.frontmatter.title}
                  </Link>
                  <p>→</p>
                  </>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

// excerpt(pruneLength: 160)
