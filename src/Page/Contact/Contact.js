import React from 'react'
import './Contact.css'
function Contact() {
	return (
		<div>
			<section class="ftco-section">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-md-10 text-center mb-5">
							<h1 class="heading-section">Contact Us</h1>
							<hr />
						</div>
					</div>
					<div class="row justify-content-center">
						<div class="col-lg-10 col-md-12">
							<div class="wrapper">
								<div class="row no-gutters">
									<div class="from col-md-10 mx-2 d-flex align-items-stretch">
										<div class="contact-wrap w-100 p-md-5 p-2">
											<h3 class="mb-4">Massage Us</h3>
											<div id="form-message-warning" class="mb-4"></div>
											<div id="form-message-success" class="mb-4">
												Your message was sent, thank you!
											</div>
											<form method="POST" id="contactForm" name="contactForm">
												<div class="row">
													<div class="col-md-6">
														<div class="form-group">
															<input type="text" class="form-control" name="name" id="name" placeholder="Name" />
														</div>
													</div>
													<div class="col-md-6">
														<div class="form-group">
															<input type="email" class="form-control" name="email" id="email" placeholder="Email" />
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" />
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<textarea name="message" class="form-control" id="message" cols="30" rows="7" placeholder="Message"></textarea>
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<input type="submit" value="Send Message" class="btn btn-primary" />
															<div class="submitting"></div>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div id="Contact" class="col-md-10 d-flex m-3">
										<div class="info-wrap w-100 p-lg-5 p-4">
											<h3 class="mb-4 mt-md-4">Contact</h3>
											<div class="dbox w-100 d-flex align-items-start">
												<div class="icon d-flex align-items-center justify-content-center">
													<span class="fa fa-map-marker"></span>
												</div>
												<div class="text pl-3">
													<p><span>Address:</span> Kazipara, Mirpur, Dhaka</p>
												</div>
											</div>
											<div class="dbox w-100 d-flex align-items-center">
												<div class="icon d-flex align-items-center justify-content-center">
													<span class="fa fa-phone"></span>
												</div>
												<div class="text pl-3">
													<p><span>Phone:</span> 01730000001</p>
												</div>
											</div>
											<div class="dbox w-100 d-flex align-items-center">
												<div class="icon d-flex align-items-center justify-content-center">
													<span class="fa fa-paper-plane"></span>
												</div>
												<div class="text pl-3">
													<p><span>Email:</span> <a href="mailto:info@yoursite.com">ismail@gmail.com</a></p>
												</div>
											</div>
											<div class="dbox w-100 d-flex align-items-center">
												<div class="icon d-flex align-items-center justify-content-center">
													<span class="fa fa-globe"></span>
												</div>
												<div class="text pl-3">
													<p><span>Website</span> <a href="#">ismail.com</a></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Contact