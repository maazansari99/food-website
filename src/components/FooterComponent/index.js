import React from 'react';
import { Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
//  SVG ---//
import FacebookSvg from '../../assets/images/svg/social/facebook.svg'
import TwitterSvg from '../../assets/images/svg/social/twitter.svg'
import InstagramSvg from '../../assets/images/svg/social/instagram.svg'
import WhatsappSvg from '../../assets/images/svg/social/whatsapp.svg'
// Images--------//
import DishImage1 from '../../assets/images/footer/footer-image-4.jpg'
import DishImage2 from '../../assets/images/footer/footer-image-5.jpg'
import DishImage3 from '../../assets/images/footer/footer-image-8.jpg'
import DishImage4 from '../../assets/images/footer/footer-image-1.jpg'
import DishImage5 from '../../assets/images/footer/footer-image-6.jpg'
import DishImage6 from '../../assets/images/footer/footer-image-2.jpg'
import DishImage7 from '../../assets/images/footer/footer-image-7.jpg'
import DishImage8 from '../../assets/images/footer/footer-image-3.jpg'

const FooterComponent = () => {

	return (
		<>
			<div className="container">

				<div className="for-details mt-5">
					<Row>
						<Col md={4}>
							<div className="address">
								<h3>ADDRESS:</h3>
								<span>Dina restaurant</span>
								<span>40 Park Ave,Brooklyn, New York 70250</span>
							</div>
						</Col>
						<Col md={4}>
							<div className="reservation">
								<h3>RESERVATION:</h3>
								<span>000-111-222</span>
								<span>contact@example.com</span>
							</div>
						</Col>
						<Col md={4}>
							<div className="hours">
								<h3>OPEN HOURS:</h3>
								<span>Monday - Friday: 10 AM - 11 PM</span>
								<span>Saturday - Sunday: 9 AM - 1 PM</span>
							</div>
						</Col>
					</Row>

				</div>

				<div className="social-contact">
					<div className="icons-social">
						<img src={FacebookSvg} alt="error" />
						<img src={TwitterSvg} alt="error" />
						<img src={InstagramSvg} alt="error" />
						<img src={WhatsappSvg} alt="error" />
					</div>
					<div className="designer-name mt-3">
						<p>2023 © DINA . DESIGNED BY MATCHTHEMES.COM</p>
					</div>

				</div>
			</div>
			<div className="food-image">

				<div className="all-dishes">
					<img src={DishImage1} alt="error" />
				</div>

				<div className="all-dishes">
					<img src={DishImage2} alt="error" />
				</div>

				<div className="all-dishes">
					<img src={DishImage3} alt="error" />
				</div>

				<div className="all-dishes">
					<img src={DishImage4} alt="error" />
				</div>

				<div className="all-dishes">
					<img src={DishImage5} alt="error" />
				</div>

				<div className="all-dishes">
					<img src={DishImage6} alt="error" />
				</div>

				<div className="all-dishes">
					<img src={DishImage7} alt="error" />
				</div>

				<div className="all-dishes">
					<img src={DishImage8} alt="error" />
				</div>
			</div>


		</>
	)
}

export default FooterComponent