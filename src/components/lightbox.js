import React, { useState, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image";

import * as styles from '../style/Lightbox.module.scss'

const Lightbox = (props) => {
    const [full, setFull] = useState(false)

    return (
        <ul className={styles.list}>
            { props.images &&
                props.images.map((img) => (
                    <li key={img.id}><GatsbyImage image={img.image.childImageSharp.gatsbyImageData} /></li>
                ))
            }
            { props.videos && 
                props.videos.map((v, index) => (
                    <li key={`${v.link}-${index}`}><iframe width="100%" height="400" src={`https://www.youtube.com/embed/${v.link}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></li>
                ))  
            }
        </ul>
    );
}

export default Lightbox