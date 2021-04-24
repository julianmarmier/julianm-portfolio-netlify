import { Link } from "gatsby"
import React from "react"

import styles from '../style/header.module.scss'

const Header = ({ windowLoc }) => {
    return(
        <header className={styles.header}>
          <Link className={styles.titleLink} to="/">
            <p className={styles.title}>julian marmier</p>
          </Link>
          <div className={styles.nav}>
            {
              windowLoc === "article" ? (
                <li className={styles.artActive}><Link to="/">Back to projects</Link></li>
              ) : (
                <li className={windowLoc === "index" ? styles.active : ""}><Link to="/">Projects</Link></li>
              )
            }
            <li className={windowLoc === "about" ? styles.active : ""}><Link to="/about">About</Link></li>
          </div>
        </header>
    )
}

/*
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
*/

export default Header
