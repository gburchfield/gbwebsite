import React from "react"
import { Helmet } from "react-helmet"
import Header from "../sections/Header";
import Home from "../sections/Home";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Career from "../sections/Career";
import Projects from "../sections/Projects";
import Footer from "../sections/Footer";

const HeaderConfig = {
    logoSrc: "img/GB_Logo_Icon.png",
    navLinks :[
        {
            name: "Home",
            href: "#home"
        },
        {
            name: "Skills",
            href: "#skills"
        },
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Career",
            href: "#career"
        },
        {
            name: "Projects",
            href: "#projects"
        },
        {
            name: "Contact",
            href: "#contact"
        }
    ]
}


export default function Index() {
    return (
        <>
            <Helmet>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>Glen Burchfield</title>

                <link rel="short icon" href="img/GB_Logo_Icon.png" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>

            <Header {...HeaderConfig} />
            <Home />
            <Skills />
            <About />
            <Career />
            <Projects />
            <Footer />

        </>
    )
}
