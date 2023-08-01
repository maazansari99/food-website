import React from "react";
import FooterComponent from "../../components/FooterComponent";
import { Col, Row } from "react-bootstrap";

import Teaimage from '../../assets/images/aboutus/tea-cup.jpg'
import Plateimage from '../../assets/images/aboutus/plates-dish.jpg'
import TeamCard from "../../TeamCard";

import Starimage from '../../assets/images/aboutus/star-svgrepo-com.svg'

import Aboutus from '../../assets/images/aboutus/about-us-bg.jpg'
import GlobalBannerImage from "../../components/GlobalComponents/GlobalBannerImage";

const AboutUsPage = () => {


    return (
        <>
            <div className="aboutus-container">
              
<div className="header">
    
</div>

{/* //-----------------------   about us -------------------------------------------// */}

<GlobalBannerImage />

{/* /////-------------------------end about us----------------------------------// */}
                

                {/* ///---------------------------OUR HISTORY----------------------------------------------/// */}

                <div className="container">
                    <div className="our-history mt-5 mb-5">
                        <Row className="for-flex-history">
                            <Col md={6} className="d-flex justify-content-end">
                                <div className="tea-image" >
                                    <img src={Teaimage} alt="" />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="history-part ms-4">
                                    <h1 className="fw-bold">OUR HISTORY</h1>
                                    <p>Lorem ipsum dolor sit amet, sea cibo laoreet omnesque ei, usu eu dicit perpetua assueverit. Has ut cibo gubergren, qui et laoreet appareat. Ea usu posse oratio, vel tritani equidem propriae ex. Sit ferri pertinax ei, et eam esse duis. Mea partem debitis interesset ei. Ea eos eirmod disputando, impetus laoreet lucilius no per, ea cum noster rationibus.</p>
                                </div>
                            </Col>
                            <Col md={6} className="d-flex justify-content-end">
                                <div className="value-part mt-5">
                                    <h1 className="mt-4 fw-bold">WHAT WE VALUE</h1>
                                    <p>Lorem ipsum dolor sit amet, sea cibo laoreet omnesque ei, usu eu dicit perpetua assueverit. Has ut cibo gubergren, qui et laoreet appareat. Ea usu posse oratio, vel tritani equidem propriae ex. Sit ferri pertinax ei, et eam esse duis. Mea partem debitis interesset ei. Ea eos eirmod disputando, impetus laoreet lucilius no per, ea cum noster rationibus.</p>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className="plate-dish mt-5">
                                    <div className="plate-image" >
                                        <img src={Plateimage} alt="" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                {/* //------------------------------rates -----------------------------------------// */}


                <div className="rate-restaurant">
                    <div className="pizza-bg-image">
                        <div className="container">
                            <Row className=" max-height w-100  d-flex  justify-content-center align-items-center ">
                                <Col md={4}>
                                    <div className="high-restaurant text-light d-flex flex-column justify-content-center align-items-center">
                                        <h1>10</h1>
                                        <p>HIGH RESTAURANTS</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="michelin-star text-light d-flex flex-column justify-content-center align-items-center">
                                        <h1>2</h1>
                                        <p>MICHELIN STAR</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="employees text-light d-flex flex-column justify-content-center align-items-center">
                                        <h1>150</h1>
                                        <p>TALENTED EMPLOYEES</p>
                                    </div>

                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>


                {/* ////----------------------------------------Teams----------------------------------------------------//// */}

                <div className="teams-container">
                    <div className="container">
                        <div className="meet-the-team ">
                            <div className="team-header-name">
                                <h1 className="fw-bold">MEET THE TEAM</h1>
                                <p className="mt-3">Delenit commune delectus cu has, labitur recteque in mel. Ad mea equidem similique, qui graeci nusquam suscipiantur in. Eu vidit dicta fuisset vis. Vix integre delicata ad, decore oportere aliquando est ad, vix nostro aliquip omnesque id. Qui te dissentiet dissentiunt, constituto elaboraret vim.</p>
                            </div>
                        </div>

                        <div className="team-image-part">
                            <TeamCard></TeamCard>
                        </div>
                    </div>


                    

             

                <div className="container rating mt-5 bg-light">
                        <Row>
                            <Col md={4} className=" for-width">
                                <div className="card-rater d-flex flex-column justify-content-center align-items-center">
                                    <div className="rates-info">
                                        <p>"Ferri altera eripuit ne nam. Duo at tibique conclusionemque, nam modo ancillae tacimates et, cu vim omnes phaedrum conclusionemque. Ex tempor eligendi corrumpit vim, sea ei tacimates reformidans. Congue corpora vis ad."</p>
                                    </div>
                                    <div className="name-rates">
                                        <h5>-Anna Jones-</h5>
                                    </div>
                                    <div className="star-rate">
                                        <img src={Starimage} alt="" />
                                        <img src={Starimage} alt="" />
                                        <img src={Starimage} alt="" />
                                        <img src={Starimage} alt="" />
                                        <img src={Starimage} alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                            <div className="card-rater d-flex flex-column justify-content-center align-items-center">
                                    <div className="rates-info">
                                        <p>"Eam numquam aliquam ea, latine placerat omittantur pri ea. Ius cu nobis numquam vivendo. Bonorum utroque has et, nam cu case clita voluptaria. Est ne error laoreet, te pro stet efficiantur suscipiantur, illum labitur ullamcorper mea no."</p>
                                    </div>
                                    <div className="name-rates">
                                        <h5>-Louis Rios-</h5>
                                    </div>
                                    <div className="star-rate">
                                        <img src={Starimage} alt="" />
                                        <img src={Starimage} alt="" />
                                        <img src={Starimage} alt="" />
                                        <img src={Starimage} alt="" />
                                        <img src={Starimage} alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                            <div className="card-rater d-flex flex-column justify-content-center align-items-center">
                                    <div className="rates-info">
                                        <p>"Mel ea diceret eripuit, has alii solet scribentur ad, vix bonorum tincidunt quaerendum ex. Odio clita has cu, ex per movet malorum, no nusquam officiis nominati mea. Ad graece admodum percipitur cum."</p>
                                    </div>
                                    <div className="name-rates">
                                        <h5>-Jean Carlson-</h5>
                                    </div>
                                    <div className="star-rate">
                                        <img src={Starimage} alt="" />
                                        <img src={Starimage} alt="" />
                                        <img src={Starimage} alt="" />
                                        <img src={Starimage} alt="" />
                                        <img src={Starimage} alt="" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>


                </div>









                {/* ///--------------------------------------------------------------------------------------------------------/// */}

            </div>

        </>
    )
};



export default AboutUsPage