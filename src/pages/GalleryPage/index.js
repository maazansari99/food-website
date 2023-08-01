import React, { useState } from "react";
import Gallery from '../../assets/images/Gallery/gallery-2-2.jpg'
import { Col, Row } from "react-bootstrap";
import GlobalBannerImage from "../../components/GlobalComponents/GlobalBannerImage";

const GalleryPage = () => {

const [foodGallery, setFoodGallery] = useState ([
    {
        image: require('../../assets/images/Gallery/gallery-2-2.jpg'),
        name: 'PRIVATE DINNING'
    },
    {
        image: require('../../assets/images/Gallery/gallery-8-3.jpg'),
        name: 'MEET COOKING'
    },
    {
        image: require('../../assets/images/Gallery/gallery-7-2.jpg'),
        name: 'SWEET DESSERTS'
    },
    {
        image: require('../../assets/images/Gallery/gallery-6-3.jpg'),
        name: 'CHEFS PLATE'
    },
    {
        image: require('../../assets/images/Gallery/gallery-5-1.jpg'),
        name: 'FRIDAY EVENING'
    },
    {
        image: require('../../assets/images/Gallery/gallery-4-2.jpg'),
        name: 'PASTA PROCESS'
    },
    {
        image: require('../../assets/images/Gallery/gallery-3-2.jpg'),
        name: 'INTO THE KITCHEN'
    },
    {
        image: require('../../assets/images/Gallery/gallery-12-3.jpg'),
        name: 'INSIDE ROOM'
    },
    {
        image: require('../../assets/images/Gallery/gallery-11-3.jpg'),
        name: 'OUTSIDE'
    },
    {
        image: require('../../assets/images/Gallery/gallery-10-2.jpg'),
        name: 'DISHES COURSE'
    },
    {
        image: require('../../assets/images/Gallery/gallery-1-3.jpg'),
        name: 'MORNING BREAKFAST'
    },
    {
        image: require('../../assets/images/Gallery/gallery-9-1.jpg'),
        name: 'CHOCOLATE MUFFINS'
    }
])



  return (
    <div className="main-container mb-5">
      <GlobalBannerImage/>
      <div className="container food-gallery mt-5">
        <Row>

            {
                foodGallery.map((value)=>{
                    return(
                        <>
                        <Col md={4} className="mt-3 ps-5">
                <div className="galleries">
                    <div className="gallery-img">
                        <img src={value.image} alt="" />
                        <div className="image-heading">
                        <h4>{value.name}</h4>
                        </div>
                    </div>
                </div>
            </Col>
                        </>
                    )
                })
            }
        </Row>
      </div>
    </div>
  );
};

export default GalleryPage;
