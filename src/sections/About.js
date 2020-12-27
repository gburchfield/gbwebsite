import React from "react";

export default function About() {

    return (
        <section id="about">

            <div id="about-bg-diagonal" className="bg-parallax">

            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div id="about-content-box">
                            <div id="about-content-box-outer">
                                <div id="about-content-box-inner">
                                    <div className="content-title wow animated fadeInDown" data-wow-delay=".5s"
                                         data-wow-duration="1s">
                                        <h3>About Glen</h3>
                                        <div className="content-title-underline"></div>
                                    </div>
                                    <div id="about-desc" className="content-title wow animated fadeInDown"
                                         data-wow-delay=".5s" data-wow-duration="1s">
                                        <p>I'm a postive, bold individual fascinated by technology and business. After
                                            completing my Bachelors degree in Aerospace Engineering, I began working in
                                            the defense industry, where I was immersed in complex enterprise systems.
                                            Along the way I started exploring full stack web development and cloud
                                            technologies by utilizing open source resources to practice and teach
                                            myself. I aim to continue growing my skills in web, cloud and big data
                                            technologies as I search for a professional opportunity to take these skills
                                            to the next level.</p>
                                    </div>
                                    <div id="about-btn" className="content-title wow animated fadeInUp"
                                         data-wow-delay=".5s" data-wow-duration="1s">
                                        <a href="http://www.linkedin.com/in/glen-burchfield"
                                           className="btn btn-lg btn-general btn-blue" role="button"><i
                                            className="fa fa-linkedin-square fa-2x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}
