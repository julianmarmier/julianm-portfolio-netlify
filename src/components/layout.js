import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import Header from "./header"
import "../style/layout.scss"

import Mail from "../../static/mail.svg"
import ThemeContext, { ThemeProvider } from "./themeContext"
import ThemeSlider from "./themeSlider"

const Layout = ({ children, windowLoc }) => {
  return (
    <ThemeContext.Consumer>
      {
        theme => (
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
              <div className={`body theme--${theme.dark ? 'dark' : 'default'}`}>
                <Helmet>
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Helmet>
                <Header windowLoc={windowLoc} />
                <main className={`main-content`}>{children}</main>
                <footer>
                  <a className="mail-link" href="mailto:julian@marmier.co">
                    <Mail className="mail-icon" />
                        julian@marmier.co
                      </a>
                    <ThemeSlider theme={theme}/>
                </footer>
              </div>
            )}
          />
        )
      }
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
