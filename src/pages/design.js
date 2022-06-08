import Layout from "../components/layout";
import React from "react";
import { Link } from "gatsby";

const DesignPage = () => (
    <Layout type="design">
        <div className="opening design"><h1 className="design"><b>Need help with design related tasks ?</b><br/>Look no further.</h1></div>
        <div className="main-grid">
            <div className="grid-full"><h1 className="design">Services</h1></div>
            <div className="grid-left"><h3>Essentially…</h3>Professional-looking web/graphic design and development for a fair price.</div>
            <div className="grid-right"><h3>Services previously done include</h3><ul>
                <li>UI/UX wireframe design</li>    
                <li>Poster design</li>
                <li>Vector design – icons, drawings…</li>
                <li>Logo design and branding</li>
                <li>Static website development — static website generators with continuous deployment via Netlify or Vercel</li>
                <li>CMS backends for static websites (Netlify CMS, Contentful…)</li>
            </ul></div> 
            <div className="grid-full"><b>To see some of my previous work, take a look at my <Link to="/#portfolio">portfolio</Link>.</b></div>
            <div className="grid-full"><h1>Contact</h1></div>
            <div className="grid-left"><b>Interested in working with me?</b></div>
          <div className="grid-right"><p>Send me an email at <a href="mailto:julianmarmier@gmail.com">julianmarmier@gmail.com</a> for more information.</p></div>
        </div>
    </Layout> 
)

export default DesignPage