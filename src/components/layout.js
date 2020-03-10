/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import Header from "./header"
import "./layout.css"

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
  require("smooth-scroll")('a[href*="/index/"]');
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Helmet>
        <Header />
        <main>{children}</main>
        <footer>
          {new Date().getFullYear()}, Julian Marmier. See the source code of this website <a href='https://github.com/jjmarm/julianm-portfolio'>here</a>.
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
