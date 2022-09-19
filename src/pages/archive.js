import Layout from "../components/layout"
import React from "react"
import * as styles from "../style/Index.module.scss"

import { Link, graphql } from "gatsby"
import useWindowDimensions from "../helper/windowDimensions"

const ArchivePage = ({ data }) => {
    const posts = data.allMarkdownRemark.edges

    const [currentImage, setImg] = React.useState(false)
    const { width } = useWindowDimensions()
    
  return (
    <Layout>
      <h1>Archive</h1>
      <div className={`${styles.portfolio} ${styles.gridLeft}`} id="portfolio">
        <ul className={styles.portfolioList}>
          <div>
            <li className={styles.titleBar}>
              <p>PROJECT</p>
              <p>YEAR</p>
            </li>
          </div>
          <ul className={styles.items}>
            {posts.map(({ node }) => {
              return (
                <Link
                  onMouseOut={() => {
                    setImg(false)
                  }}
                  onMouseOver={() => {
                    setImg(
                      node.frontmatter.thumbnail.childImageSharp.gatsbyImageData
                    )
                  }}
                  to={node.fields.slug}
                  key={node.fields.slug}
                >
                  <li key={node.fields.slug}>
                    {/* <img className="portfolio-img" alt={node.frontmatter.description} src={node.frontmatter.thumbnail}/> */}
                    <div>
                      <p>{node.frontmatter.title}</p>
                      {width < 740 && (
                        <p className={styles.tag}> {node.frontmatter.tag} </p>
                      )}
                    </div>
                    <p>{node.frontmatter.date}</p>
                  </li>
                </Link>
              )
            })}
          </ul>
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { archived: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY")
            title
            archived
            tag
            description
            thumbnail {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`

export default ArchivePage
