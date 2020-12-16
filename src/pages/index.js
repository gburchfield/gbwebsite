import * as React from "react"
import DesktopNav from "../components/DesktopNav";

import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Content from "../components/Content";

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
        <main>
            <div>
                <title>Glen Burchfield</title>
                <DesktopNav siteConfig={siteConfig}/>
                <Content siteConfig={siteConfig}/>
            </div>
        </main>
    )
}

export default IndexPage
