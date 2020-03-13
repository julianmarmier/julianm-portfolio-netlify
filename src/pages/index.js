import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image'
import Layout from '../components/layout';

import SEO from '../components/seo';
import '../components/index.css';

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return(
    <Layout>
      <SEO title="Julian Marmier"/>
      <div className="mobile-head">julian marmier</div>
      <div className="opening"><h1>Welcome to my portfolio.</h1></div>
      <div className="divider">
        <div className="hero"><h2>Check out my work!</h2></div>
        <div className="hero"><Link to="/#portfolio" className="hero-big">Skip to the portfolio</Link><a href="/Portfolio_JulianMarmier.pdf" className="hero-big">Download the PDF version</a></div>
      </div>
      <div className="main-grid">
        <div className="grid-left"><h2>Hi, I'm Julian Marmier, a high school senior living in Lexington, Massachusetts.</h2></div>
        <div className="grid-right">
          Thanks for taking the time to take a look at my portfolio. There are no rules to this website—you are free to roam about and discover who I am.
          <br/>Feel free to <a href="#about">learn more about me</a>, or, if you’re in a hurry, <a href="#portfolio">skip straight to my portfolio</a>. If you have any questions or concerns, don’t hesitate to <a href="#contact">contact me</a>.
          </div>

          <div className="grid-full" id="about"><h1>About Me</h1></div>
          <div className="grid-left"><h2>Who I Am</h2></div>
          <div className="grid-right"><p>
            I grew up in Boston until I moved to Shanghai, China at the age of 9, in 2012, where I learned to speak Mandarin and had the chance to explore an entirely different part of the world. My parents are both Swiss, but I’m also American and have been part of both the French and American school systems. I’ve swam competitively since I was 10, and am currently in my school’s Varsity team.
          </p></div>
          <div className="grid-left"><h2>My Interests</h2></div>
          <div className="grid-right"><p>
            Ever since I was four, I’ve always been passionate about two things—computers and design. Today I like to blend both of those together as much as I can, and am part of a FIRST Tech Challenge robotics team, the <a href="https://legoheads.tk">Lexington Legoheads</a>, where I lead work on the Engineering Notebook. Something I also enjoy is making videos, even though those that I make are for school.
          </p></div>
          <div className="grid-left"><h2>What I've Done</h2></div>
          <div className="grid-right"><p>
            My portfolio ties in a lot with my interests. The hours I spent on the web looking for design inspiration and bits of code were put to use in my branding and app design work for food start-up <a href="https://market2dayapp.com">Market 2day</a>. During the summer of 2019, I spent a month at <a href="https://mitmuseum.mit.edu/mit-community/mit-museum-studio-and-compton-gallery">MIT’s Compton Gallery + Museum Studio</a>, where I helped prepare for the upcoming school year. I’ve also done some work for my school’s class, designing posters for some of the school’s events.
          </p></div>
          <div className="grid-left"><h2>What I Can Do</h2></div>
          <div className="grid-right"><p>
            I can use anything from Google Sheets and Photoshop to SketchUp and Atom, and would be happy to learn anything new. In terms of computer programming, I have had experience with many different sorts of programming languages including Python, JavaScript, C++, Ruby, HTML and CSS. With proper documentation and some time, I can also learn to use programming libraries, although I am most comfortable with web development.
          </p></div>
          <div className="portfolio grid-full" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
              {posts.map(({ node }) => {
                return(
                  <Link to={node.fields.slug}><li key={node.fields.slug}>
                    <img className="portfolio-img" src={node.frontmatter.thumbnail}/>
                    <h2>
                      {node.frontmatter.title}
                    </h2>
                  </li></Link>
                )
              })}
            </ul>
          </div>
          <div className="grid-full" id="contact"><h1>Contact</h1></div>
          <div className="grid-left">Questions? Concerns? Feedback?<br/><b>Let me know!</b></div>
          <div className="grid-right"><p>Send me an email at <a href="mailto"julianmarmier>julianmarmier@gmail.com</a>.</p></div>
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
