import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {

	return (
		<footer>

			<div id="contact">

				<div className="container">

					<div className="row">

						<div className="col-md-6">

							<div id="contact-left">

								<h3>Glen Burchfield</h3>
								<br/><br/>
									<div id="contact-info">

										<address>
											<strong>Location:</strong><br/>
											<p>525 Avalon Lakes <br/> Orlando, FL 32828</p>
										</address>
										<div id="phone-email">
											<p><strong>Phone:</strong><span> (904) 679-1277</span></p>
											<p><strong>Email:</strong><span> Glen.Burchfield.91@gmail.com</span></p>
										</div>

									</div>

									<ul className="social-list">
										<li>
											<a href="#" className="social-icon icon-white">
											<FontAwesomeIcon icon={faInstagram} size="3x" />
											</a>
										</li>

										<li><a href="#" className="social-icon icon-white">
											<FontAwesomeIcon icon={faLinkedin} size="3x" />
										</a></li>
										<li><a href="#" className="social-icon icon-white">
											<FontAwesomeIcon icon={faFacebook} size="3x" />
										</a></li>
										<li><a href="#" className="social-icon icon-white">
											<FontAwesomeIcon icon={faYoutube} size="3x" />
										</a></li>
									</ul>

							</div>

						</div>

						<div className="col-md-6">

							<div id="contact-right">

								<h3>Contact</h3>
								<form action="#">

									<input type="text" name="full-name" placeholder="Full Name"
										   className="form-control" />
										<input type="text" name="email" placeholder="Email Address"
											   className="form-control" />
											<textarea name="message" placeholder="Message..." rows="5"
													  className="form-control"></textarea>

											<div id="send-btn">
												<a className="btn btn-lg btn-general btn-white">Send</a>
											</div>

								</form>

							</div>

						</div>


					</div>

				</div>

			</div>

			<div id="footer-bottom">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div id="footer-copyrights">
								<p>Copyright &copy; 2017 All Rights Reserved By Glen Burchfield</p>
							</div>
						</div>
						<div className="col-md-6 hidden-sm hidden-xs">
							<div id="footer-menu">
								<ul>
									<li><a href="#home" className="smooth-scroll">Home</a>/</li>
									<li><a href="#skills" className="smooth-scroll">Skills</a>/</li>
									<li><a href="#about" className="smooth-scroll">About</a>/</li>
									<li><a href="#career" className="smooth-scroll">Career</a>/</li>
									<li><a href="#projects" className="smooth-scroll">Projects</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

		</footer>

)

}

