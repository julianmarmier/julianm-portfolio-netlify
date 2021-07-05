import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"

import Layout from '../components/layout'

import * as styles from "../style/Post.module.scss"

import '../components/article.css'
import '../style/Post-themed.scss'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout windowLoc="article">
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div className={styles.mainContent}>
        <div className={`post-divider bold ${styles.gridFull}`}></div>
        <div className={`${styles.gridLeft} ${styles.opening}`}>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.description}</p>
        </div>
        <div className={`${styles.gridRight} ${styles.opening}`}>
          <p>{post.frontmatter.date}</p>
        </div>
        <div className={`${styles.gridFull} scroller`}>
          <section className="art-main" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>

        <nav className={`${styles.gridFull} ${styles.nav}`}>
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
