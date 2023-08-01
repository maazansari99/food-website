import React, { useState } from "react";
import WineGlass from "../../../assets/images/png/glass-1-150x150.png";
import Food from "../../../assets/images/png/food-2-150x150.png";
import Groceries from "../../../assets/images/png/groceries-2-150x150.png";
import { Col, Row } from "react-bootstrap";


const FreshFoodServiceCard = () => {

    return (
        <>

            <div className="about-resturant pt-4 mb-5 pb-4">
                <Row className="container ">
                    <Col md={4}>
                        <div className="f-food d-flex justify-content-end">
                            <div className="food-img">
                                <img src={Groceries} alt="" />
                            </div>
                            <div className="about-food ps-3">
                                <h2>FRESH FOOD</h2>
                                <span>
                                    Donec lacinia magna sit amet arcu <br /> aliquet luctus
                                    maecenas vehicula.
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="chefs-spl d-flex justify-content-center">
                            <div className="chef-img">
                                <img src={Food} alt="" />
                            </div>
                            <div className="about-chefs ps-3">
                                <h2>CHEF'S SPECIALS</h2>
                                <span>
                                    Donec lacinia magna sit amet arcu <br /> aliquet luctus
                                    maecenas vehicula.
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="wine d-flex justify-content-start">
                            <div className="wine-img">
                                <img src={WineGlass} alt="" />
                            </div>
                            <div className="about-wine ps-3">
                                <h2>GOOD WINE</h2>
                                <span>
                                    Donec lacinia magna sit amet arcu <br /> aliquet luctus
                                    maecenas vehicula.
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default FreshFoodServiceCard