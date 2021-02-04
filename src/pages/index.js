import React from 'react';
import { Link, graphql } from 'gatsby';
//import Img from 'gatsby-image'
import Layout from '../components/layout';

import SEO from '../components/seo';
import '../components/index.css';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return(
    <Layout windowLoc="index">
      <SEO title="Julian Marmier"/>
          <div className="portfolio grid-full" id="portfolio">
            <ul>
              {posts.map(({ node }) => {
                return(
                  <Link to={node.fields.slug}><li key={node.fields.slug}>
                    <img className="portfolio-img" alt={node.frontmatter.description} src={node.frontmatter.thumbnail}/>
                    <h2>
                      {node.frontmatter.title}
                    </h2>
                  </li></Link>
                )
              })}
            </ul>
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail
          }
        }
      }
    }
  }
  `
