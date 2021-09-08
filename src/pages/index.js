import React, { useState } from 'react';
import ReactMarkdown from "react-markdown"

import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image'

import Layout from '../components/layout';

import Seo from '../components/seo';
import * as styles from '../style/Index.module.scss';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  // const imList = edges.map()

  const [currentImage, setImg] = useState(false)

  return(
    <Layout windowLoc="index">
      <Seo title="Julian Marmier"/>
        <div className={styles.mainGrid}>
        <div className={`${styles.gridFull} nutshell ${styles.introBlock}`}>
          <div>
            <h2>In a nutshell</h2>
            <ReactMarkdown>{data.staticTextYaml.intro}</ReactMarkdown>
          </div>
          <Link className={styles.link} to="/about">
            <span>Read the rest</span>
            <span>→</span>
          </Link>
          </div>
          <div className={`${styles.portfolio} ${styles.gridLeft}`} id="portfolio">
            <ul className={styles.portfolioList}>
              <li className={styles.titleBar}>
                <p>PROJECT</p>
                <p>YEAR</p>
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
          <div className={`${styles.gridFull} ${styles.gridBottom}`}>
            <ul className={styles.links}>
              <a href="/julianm-portfolio-short.pdf">Download Shortened Portfolio</a>
              <a href="/julianm-portfolio.pdf">Download Full Portfolio</a>
              <a href="/julianm-cv.pdf">Download CV</a>
            </ul>
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
    staticTextYaml {
      intro
      present
      past
    }
  }
  `
