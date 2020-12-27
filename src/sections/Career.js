import React from "react";

export default function Career() {

    return (
        <section id="career">

            <div className="content-box">

                <div className="content-title wow fadeInDown" data-wow-delay=".5s" data-wow-duration="1s">
                    <h3>Career</h3>
                    <div className="content-title-underline"></div>
                </div>

                <div className="container-fluid">

                    <div className="row no-gutters content-title wow fadeInUp" data-wow-delay=".5s"
                         data-wow-duration="1s">

                        <div className="col-md-4 col-sm-4">
                            <div className="img-wrapper">
                                <a href="#ucf-popup" className="open-popup-link" title="UCF">
                                    <img src="img/UCF.jpg" className="img-responsive" alt="UCF" />
                                </a>
                            </div>
                            <div id="ucf-popup" className="career-popup mfp-hide">

                                <div className="container">

                                    <div className="row">

                                        <div className="col-md-6 col-sm-6">

                                            <div className="career-content-title animated fadeInDown"
                                                 data-wow-delay=".5s" data-wow-duration="1s">
                                                <h3>University of Central Florida</h3>
                                                <div className="content-title-underline"></div>
                                            </div>

                                            <div className="career-desc animated fadeInUp">
                                                <p>Bachelors of Science Aerospace Engineering</p>
                                                <p>Minor in Accounting</p>
                                                <p>2014 Cum Laude Graduate</p>
                                                <p>3.7 Overall GPA</p>
                                            </div>

                                        </div>

                                        <div className="col-md-6 col-sm-6">

                                            <img src="img/UCF.jpg" className="img-responsive animated fadeInRight "
                                                 alt="UCF" />

                                        </div>

                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="img-wrapper">
                                <a href="#lm-popup" className="open-popup-link" title="Lockheed Martin">
                                    <img src="img/LM.jpg" className="img-responsive" alt="Lockheed Martin" />
                                </a>
                            </div>

                            <div id="lm-popup" className="career-popup mfp-hide">

                                <div className="container">

                                    <div className="row">

                                        <div className="col-md-6 col-sm-6">
                                            <div className="career-content-title animated fadeInDown"
                                                 data-wow-delay=".5s" data-wow-duration="1s">
                                                <h3>Lockheed Martin</h3>
                                                <div className="content-title-underline"></div>
                                            </div>

                                            <div className="career-desc animated fadeInUp">
                                                <p>Engineering Intern: 2012 - 2014</p>
                                                <p>Systems Engineer Associate: 2014 - 2015</p>
                                                <p>Systems Engineer: 2016 - Present</p>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-6">
                                            <img src="img/LM.jpg" className="img-responsive animated fadeInRight "
                                                 alt="Lockheed Martin" />
                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="img-wrapper">
                                <a href="#ng-popup" className="open-popup-link" title="Northrop Grumman">
                                    <img src="img/NG.jpg" className="img-responsive" alt="Northrop Grumman" />
                                </a>
                            </div>

                            <div id="ng-popup" className="career-popup mfp-hide">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">

                                            <div className="career-content-title animated fadeInDown">
                                                <h3>Northrop Grumman</h3>
                                                <div className="content-title-underline"></div>
                                            </div>

                                            <div className="career-desc animated fadeInUp">
                                                <p>Software Systems Test Engineer: 2015 - 2016</p>
                                            </div>

                                        </div>

                                        <div className="col-md-6 col-sm-6">

                                            <img src="img/NG.jpg" className="img-responsive animated fadeInRight"
                                                 alt="Northrop Grumman" />

                                        </div>
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
