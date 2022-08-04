import React, { useState } from "react"
import ReactMarkdown from "react-markdown"

import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import Seo from "../components/seo"
import * as styles from "../style/Index.module.scss"

import CVIcon from "../../static/CV.svg"
import SPIcon from "../../static/ShortPortfolio.svg"
import PIcon from "../../static/Portfolio.svg"
import useWindowDimensions from "../helper/windowDimensions"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  // const imList = edges.map()

  const [currentImage, setImg] = useState(false)
  const { width } = useWindowDimensions()

  return (
    <Layout windowLoc="index">
      <Seo title="Julian Marmier" />
      <div className={styles.mainGrid}>
        <div className={`${styles.gridFull} nutshell ${styles.introBlock}`}>
          <div>
            <h2>In a nutshell</h2>
            <ReactMarkdown>{data.staticTextYaml.intro}</ReactMarkdown>
          </div>
          <Link className={styles.link} to="/about">
            <span>Read the rest</span>
            <span style={{ marginLeft: "5px" }}>→</span>
          </Link>
        </div>
        <div
          className={`${styles.portfolio} ${styles.gridLeft}`}
          id="portfolio"
        >
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
                        node.frontmatter.thumbnail.childImageSharp
                          .gatsbyImageData
                      )
                    }}
                    to={node.fields.slug}
                    key={node.fields.slug}
                  >
                    <li key={node.fields.slug}>
                      {/* <img className="portfolio-img" alt={node.frontmatter.description} src={node.frontmatter.thumbnail}/> */}
                      <div>
                        <p>{node.frontmatter.title}</p>
                        { width < 740 && <p className={styles.tag}> { node.frontmatter.tag } </p> }
                      </div>
                      <p>{node.frontmatter.date}</p>
                    </li>
                  </Link>
                )
              })}
            </ul>
          </ul>
        </div>
        <div className={styles.gridRight}>
          {currentImage ? (
            <GatsbyImage
              image={currentImage}
              className={styles.gridImage}
              transformOptions={{ fit: "cover", position: "centre" }}
            />
          ) : (
            <p></p>
          )}
        </div>
        <div className={`${styles.gridFull} ${styles.gridBottom}`}>
          <ul className={styles.links}>
            <a href="/julianm-portfolio-short.pdf">
              <SPIcon className={"link-icon"} />
              Download Shortened Portfolio
            </a>
            <a href="/julianm-portfolio.pdf">
              <PIcon className={"link-icon"} />
              Download Full Portfolio
            </a>
            <a href="/julianm-cv.pdf">
              <CVIcon className={"link-icon"} />
              Download CV
            </a>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
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
    staticTextYaml {
      intro
      present
      past
    }
  }
`
