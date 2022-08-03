import React, { useState } from "react"
import * as styles from "../style/Post.module.scss"

import useWindowDimensions from "../helper/windowDimensions"
import Lightbox from "../components/lightbox"

const PostContent = (props) => {
  const post = props.post

  const [showMedia, setShowMedia] = useState(false)
  const toggleShowMedia = () => setShowMedia(!showMedia)

  const { width } = useWindowDimensions()
  const WIN_BREAKPOINT = 740

  return width < WIN_BREAKPOINT ? (
      <div className={`${styles.gridMobile} ${showMedia ? styles.active : ""}`}>
        <div className={`${styles.gridLeft} grid-left-item scroller`}>
          <section
            className="art-main"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
        <div
          className={`${styles.divider} ${showMedia ? styles.active : ""}`}
          onClick={toggleShowMedia}
        >
          {showMedia ? "↓ Description" : "↑ Images"}
        </div>
        <div className={`${styles.gridRight} scroller`}>
          {
            <Lightbox
              images={post.frontmatter.images}
              videos={post.frontmatter.videos}
            />
            /* post.frontmatter.images.map((img) => {
                // img.alt - image alt text
                // img.image – Gatsby Image
                // idea – inside <Lightbox/> component include both an inline version as well as a fullscreen version, 
              }) */
          }
        </div>
      </div>
  ) : (
    <div className={`${styles.gridTwoCol}`}>
      <div className={`${styles.gridLeft} grid-left-item scroller`}>
        <section
          className="art-main"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <div className={`${styles.gridRight} scroller`}>
        {
          <Lightbox
            images={post.frontmatter.images}
            videos={post.frontmatter.videos}
          />
          /* post.frontmatter.images.map((img) => {
                // img.alt - image alt text
                // img.image – Gatsby Image
                // idea – inside <Lightbox/> component include both an inline version as well as a fullscreen version, 
              }) */
        }
      </div>
    </div>
  )
}

export default PostContent
