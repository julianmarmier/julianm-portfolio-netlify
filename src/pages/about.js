import { graphql } from "gatsby"
import React from "react"

import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import "../style/About.scss"



const AboutPage = ({ data }) => {
    const info = data.staticTextYaml
    return (
        <Layout windowLoc="about">
            <div className="grid">
                <div className={"left"}>
                    <div className="bio">
                        <ReactMarkdown>{info.bio}</ReactMarkdown>
                        {/* <section dangerouslySetInnerHTML={{__html: info.intro.html}}></section> */}
                    </div>
                </div>
                <div className="right">
                    <div className={"present"}>
                        <h2>Present</h2>
                        <ReactMarkdown>{info.present}</ReactMarkdown>
                    </div>
                    <div className="past">
                        <h2>Past</h2>
                        <ul className={"past-list"}>
                            {
                                info.past.map((item, i) => {
                                    return <li key={`about-list-${i}`}><ReactMarkdown>{item}</ReactMarkdown></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query aboutPage {
        staticTextYaml {
            bio
            present
            past
        }
    }
`

export default AboutPage