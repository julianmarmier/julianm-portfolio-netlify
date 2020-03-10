import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <SEO title="404: Not Found" />
        <h1>Uh-oh.</h1>
        <p>Looks like you found a page that doesn't exist. Click <a href="/">here</a> to go to the homepage, or choose an option from the menu.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
