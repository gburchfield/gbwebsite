import React from "react";

export default function Header() {

    return (
        <header>

            <nav className="navbar navbar-fixed-top" role="navigation">

                <div className="container-fluid">

                    <div className="glen-nav-wrapper">

                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#glen-menu">
                                <span className="sr-only">Toggle Navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a href="#home" className="navbar-brand">
                                <img src="img/GB_Logo_Icon.png" alt="" width="75px" height="40px" />
                            </a>
                        </div>

                        <div className="collapse navbar-collapse" id="glen-menu">
                            <ul className="nav navbar-nav">
                                <li><a className="smooth-scroll" href="#home">Home</a></li>
                                <li><a className="smooth-scroll" href="#skills">Skills</a></li>
                                <li><a className="smooth-scroll" href="#about">About</a></li>
                                <li><a className="smooth-scroll" href="#career">Career</a></li>
                                <li><a className="smooth-scroll" href="#projects">Projects</a></li>
                                <li><a className="smooth-scroll" href="#contact">Contact</a></li>
                            </ul>
                        </div>

                    </div>

                </div>

            </nav>

        </header>
    )
}
