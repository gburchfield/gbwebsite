import * as React from "react"
import DesktopNav from "../components/DesktopNav";

import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
// styles
const pageStyles = {
    height: "100vh",
    color: "#232129",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    backgroundColor: "#334452"
}

const siteConfig = {
    siteBrand: "Unsuccessful Technologies",
    sections: [
        {
            name:"home"
        },
        {
            name:"about"
        },
        {
            name:"resume"
        },
        {
            name:"services"
        },
        {
            name:"portfolio"
        },
        {
            name:"contact"
        },
    ],
    socialLinks: [
        {
            type: faLinkedinIn,
            url: "#"
        },
        {
            type: faGithub,
            url: "#"
        }
    ]
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Glen Burchfield</title>
        <DesktopNav siteConfig={siteConfig}/>
    </main>
  )
}

export default IndexPage
