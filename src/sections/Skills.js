import React from "react";

export default function Skills() {

    return (
        <section id="skills">

            <div className="content-box">

                <div className="content-title wow fadeInDown" data-wow-delay=".5s" data-wow-duration="1s">
                    <h3>Skills</h3>
                    <div className="content-title-underline"></div>
                </div>

                <div className="container">

                    <div className="row wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">

                        <div className="col-md-4 col-sm-6">

                            <div className="skill-item">

                                <div className="skill-item-icon">
                                    <i className="fa fa-desktop fa-3x"></i>
                                </div>
                                <div className="skill-item-heading">
                                    <h3>Client Side</h3>
                                </div>
                                <div className="skill-item-desc">
                                    <p>HTML5 - CSS3 - JavaScript - Angular - Bootstrap - jQuery</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4 col-sm-6">

                            <div className="skill-item">

                                <div className="skill-item-icon">
                                    <i className="fa fa-server fa-3x"></i>
                                </div>
                                <div className="skill-item-heading">
                                    <h3>Server Side</h3>
                                </div>
                                <div className="skill-item-desc">
                                    <p>Node.js - Express.js - Mongoose.js - MongoDB - Linux</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4 col-sm-6">

                            <div className="skill-item">

                                <div className="skill-item-icon">
                                    <i className="fa fa-cogs fa-3x"></i>
                                </div>
                                <div className="skill-item-heading">
                                    <h3>Automation</h3>
                                </div>
                                <div className="skill-item-desc">
                                    <p>Test driven development utilizing Nodemon and Mocha.js</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4 col-sm-6">

                            <div className="skill-item">

                                <div className="skill-item-icon">
                                    <i className="fa fa-amazon fa-3x"></i>
                                </div>
                                <div className="skill-item-heading">
                                    <h3>Amazon Web Services</h3>
                                </div>
                                <div className="skill-item-desc">
                                    <p>Elastic Beanstalk - EC2 Instances - S3 Buckets</p>
                                </div>
                            </div>

                        </div>


                        <div className="col-md-4 col-sm-6">

                            <div className="skill-item">

                                <div className="skill-item-icon">
                                    <i className="fa fa-terminal fa-3x"></i>
                                </div>
                                <div className="skill-item-heading">
                                    <h3>Programing</h3>
                                </div>
                                <div className="skill-item-desc">
                                    <p>JavaScript ES6 - TypeScript 2.0 -<br/>Python 2.7 - C#</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4 col-sm-6">

                            <div className="skill-item">

                                <div className="skill-item-icon">
                                    <i className="fa fa-pencil-square-o fa-3x"></i>
                                </div>
                                <div className="skill-item-heading">
                                    <h3>Web Design</h3>
                                </div>
                                <div className="skill-item-desc">
                                    <p>Adobe Creative Cloud. Logos, Illustrations, Video Productions</p>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </section>
    )
}
