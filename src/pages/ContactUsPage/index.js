import React from "react";
import GlobalBannerImage from "../../components/GlobalComponents/GlobalBannerImage";
import ContactusCard from "../../components/ContactusCard";
import { Col, Row } from "react-bootstrap";




const ContactUsPage = () => {


    return (
        <>
           <div className="contact-us-page">

             {/* /////----------------contact us banner------------------------/////// */}

               <div className="contact-us-banner">
                <GlobalBannerImage></GlobalBannerImage>
               </div>

                <div className="container contact-us mt-5">

                   <div className="place-directions">
                        <ContactusCard/>
                   </div>


                   <div className="send-messages-part mt-5">
                    <Row>
                        <Col md={6}>
                            <div className="name-email-part mt-5">
                                <div className="name-contact">
                                    <h5 >Name*</h5>
                                    <input type="text" placeholder="" />
                                </div>
                                <div className="email-contact">
                                    <h5>Email*</h5>
                                    <input type="text" placeholder="" />
                                </div>
                            </div>
                            <div className="subject-contact mt-5">
                                <h5>Subject*</h5>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="message-contact mt-5">
                                <h5>Message*</h5>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="send-message-button mt-5 mb-3">
                                <button>SEND MESSAGE</button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="map-contact">
                            <iframe loading="lazy" src="https://maps.google.com/maps?q=40%20Park%20Ave%2C%20Brooklyn&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near" title="40 Park Ave, Brooklyn" aria-label="40 Park Ave, Brooklyn"></iframe>
                            </div>
                        </Col>
                    </Row>
                   </div>

                </div>


           </div>
        </>
    )
};



export default ContactUsPage