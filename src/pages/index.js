import React from "react"
import { Helmet } from "react-helmet"
import Header from "../sections/Header";
import Home from "../sections/Home";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Career from "../sections/Career";
import Projects from "../sections/Projects";
import Footer from "../sections/Footer";

export default function Index() {
    return (
        <>
            <Helmet>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>Glen Burchfield</title>

                <link rel="short icon" href="img/GB_Logo_Icon.png" />
            </Helmet>

            <Header />
            <Home />
            <Skills />
            <About />
            <Career />
            <Projects />
            <Footer />

        </>
    )
}
