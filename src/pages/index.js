import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image'

import Layout from '../components/layout';

import SEO from '../components/seo';
import * as styles from '../style/Index.module.scss';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  // const imList = edges.map()

  const [currentImage, setImg] = useState(false)

  return(
    <Layout windowLoc="index">
      <SEO title="Julian Marmier"/>
        <div className={styles.mainGrid}>
          <div className={`${styles.portfolio} ${styles.gridLeft}`} id="portfolio">
              <ul className={styles.portfolioList}>
                <li>
                  <p>Title</p>
                  <p>Year</p>
                </li>
                {posts.map(({ node }) => {
                  return (
                    <Link onMouseOut={() => {setImg(false)}} onMouseEnter={() => {setImg(node.frontmatter.thumbnail.childImageSharp.fluid)}} to={node.fields.slug}><li key={node.fields.slug}>
                      {/* <img className="portfolio-img" alt={node.frontmatter.description} src={node.frontmatter.thumbnail}/> */}
                      <p>
                        {node.frontmatter.title}
                      </p>
                      <p>{node.frontmatter.date}</p>
                    </li></Link>
                  )
                })}
              </ul>
          </div>
          <div className={styles.gridRight}>
              {
                currentImage ?
                <Img fluid={currentImage} />
                : <p>Hover over an entry.</p>
              }
          </div>
        </div>
      </Layout>
    )
  }

  export default IndexPage

  export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY")
            title
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
    }
  }
  `
