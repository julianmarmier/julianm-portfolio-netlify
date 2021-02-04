import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import Header from "./header"
import "../style/layout.scss"
import s from "../style/Switch.module.scss"

import Mail from "../../static/mail.svg" // this might not work, double check

const Layout = ({ children, windowLoc }) => {
  const [dark, setDark] = useState(false)

  function toggleDark() {
  	dark ? setDark(false) : setDark(true);
  }

  return(
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
        <div className={`body ${dark ? 'dark' : ''}`}>
          <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </Helmet>
          <Header windowLoc={windowLoc}/>
          <main className="main-content">{children}</main>
          <footer>
            <a className="mail-link" href="mailto:julianmarmier@gmail.com">
              <Mail className="mail-icon"/>
              julianmarmier@gmail.com
            </a>
            <div className={`${s.slider} ${dark ? s.dark : ''}`} onClick={toggleDark}>
              <input type="checkbox"/>
              <div className={s.background}>
                <div className={s.sun}></div>
                <div className={s.moon}></div>
              </div>
            </div>
          </footer>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
