import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDesktop} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faYoutube} from "@fortawesome/free-brands-svg-icons";

export default function Projects() {

    return (
        <section id="projects">

            <div className="content-box">
                <div className="content-title wow animated fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                    <h3>My Projects</h3>
                    <div className="content-title-underline"></div>
                </div>
            </div>

            <div className="container">
                <div className="row wow animated fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                    <div className="col-md-12">

                        <div id="project-members" className="owl-carousel owl-theme">

                            <div className="project-member">
                                <div className="project-member-icon">
                                    <img src="img/Projects/carlos-muza-84523.jpg" className="img-responsive"
                                         alt="Project" />
                                </div>

                                <div className="project-member-info text-center">
                                    <h4 className="project-member-name">Demo Project</h4>
                                    <ul className="social-list">
                                        <li><a href="#" className="social-icon icon-gray">
                                            <FontAwesomeIcon icon={faGithub} size="3x" />
                                        </a></li>
                                        <li><a href="#" className="social-icon icon-gray">
                                            <FontAwesomeIcon icon={faYoutube} size="3x" />
                                        </a></li>
                                    </ul>
                                </div>

                            </div>

                            <div className="project-member">
                                <div className="project-member-icon">
                                    <img src="img/Projects/linval-ebanks-5829.jpg" className="img-responsive"
                                         alt="Project" />
                                </div>


                                <div className="project-member-info text-center">
                                    <h4 className="project-member-name">Demo Project</h4>
                                    <ul className="social-list">
                                        <li><a href="#" className="social-icon icon-gray">
                                            <FontAwesomeIcon icon={faGithub} size="3x" />
                                        </a></li>
                                        <li><a href="#" className="social-icon icon-gray">
                                            <FontAwesomeIcon icon={faYoutube} size="3x" />
                                        </a></li>
                                    </ul>
                                </div>

                            </div>

                            <div className="project-member">
                                <div className="project-member-icon">
                                    <img src="img/Projects/nasa-43565.jpg" className="img-responsive" alt="Project" />
                                </div>


                                <div className="project-member-info text-center">
                                    <h4 className="project-member-name">Demo Project</h4>
                                    <ul className="social-list">
                                        <li><a href="#" className="social-icon icon-gray">
                                            <FontAwesomeIcon icon={faGithub} size="3x" />
                                        </a></li>
                                        <li><a href="#" className="social-icon icon-gray">
                                            <FontAwesomeIcon icon={faYoutube} size="3x" />

                                        </a></li>
                                    </ul>
                                </div>

                            </div>

                            <div className="project-member">
                                <div className="project-member-icon">
                                    <img src="img/Projects/natia-rukhadze-435114.jpg" className="img-responsive" alt="" />
                                </div>


                                <div className="project-member-info text-center">
                                    <h4 className="project-member-name">Demo Project</h4>
                                    <ul className="social-list">
                                        <li><a href="#" className="social-icon icon-gray">
                                            <FontAwesomeIcon icon={faGithub} size="3x" />
                                        </a></li>
                                        <li><a href="#" className="social-icon icon-gray">
                                            <FontAwesomeIcon icon={faYoutube} size="3x" />
                                        </a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>

)
}
