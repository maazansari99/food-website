import { faBirthdayCake, faBookOpen, faFish, faGift, faGlassCheers,faWineBottle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import GlobalBannerImage from "../../components/GlobalComponents/GlobalBannerImage";

const ServicesPage = () => {
  const [returantServices, setReturantServices] = useState([
    {
        icon: <FontAwesomeIcon icon={faGift} /> ,
        name: 'Food Delivery',
        discription: 'Duo at tibique conclusionemque, nam modo ancillae tacimates et, cu vim omnes phaedrum '
    },
    {
        icon: <FontAwesomeIcon icon={faGlassCheers} />,
        name: 'Private Events',
        discription: 'Duo at tibique conclusionemque, nam modo ancillae tacimates et, cu vim omnes phaedrum'
    },
    {
        icon: <FontAwesomeIcon icon={faBirthdayCake} />,
        name: 'Special Desserts',
        discription: 'Duo at tibique conclusionemque, nam modo ancillae tacimates et, cu vim omnes phaedrum '
    },
    {
        icon: <FontAwesomeIcon icon={faBookOpen} />,
        name: 'A la Carte',
        discription: 'Duo at tibique conclusionemque, nam modo ancillae tacimates et, cu vim omnes phaedrum '
    },
    {
        icon: <FontAwesomeIcon icon={faFish} />,
        name: 'Fresh Ingredients',
        discription: 'Duo at tibique conclusionemque, nam modo ancillae tacimates et, cu vim omnes phaedrum '
    },
    {
        icon: <FontAwesomeIcon icon={faWineBottle} />,
        name: 'Tasty Wine',
        discription: 'Duo at tibique conclusionemque, nam modo ancillae tacimates et, cu vim omnes phaedrum '
    },
  ]);

  return (
    <div className="main-container">
      <GlobalBannerImage/>
      <div className="container resturant-services mt-5 me-5 ms-5 ps-5 pe-5">
        <Row>
{
    returantServices.map((value)=>{
return(
    <>
    <Col md={4} className="mt-5">
            <div className="service">
            {/* <FontAwesomeIcon className="fas fa-gift"  /> */}
            <span className="font-icon-color">{value.icon}</span>

              <h2>{value.name}</h2>
              <p>
                {value.discription}
              </p>
            </div>
          </Col>
    </>
)
    })
}

        </Row>
      </div>
      <div className="chefs-services mt-5">
        <div className="about-chefs-service">
          <span>A LA CARTE</span>
          <h1>CHEF'S SPECIALS</h1>
          <p>
            Lorem ipsum dolor sit amet, sea cibo laoreet omnesque ei, usu eu
            dicit perpetua assueverit. <br /> Has ut cibo gubergren, qui et
            laoreet appareat. Ea usu posse oratio, vel tritani equidem <br />{" "}
            propriae ex. Sit ferri pertinax ei, et eam esse duis.
          </p>
          <div className="menu-btn">
            <button>VIEW OUR MENU</button>
          </div>
        </div>
      </div>
      <div className="container table-reserve mt-5">
        <Row>
          <Col md={12} className="">
            <div className="service-reseve-table">
              <h1>RESERVE A TABLE</h1>
              <p>
                Lorem ipsum dolor sit amet, sea cibo laoreet omnesque ei, usu eu
                dicit perpetua assueverit. Has ut cibo gubergren, qui et laoreet
                appareat. Ea usu posse oratio, vel tritani equidem propriae ex.
                Sit ferri pertinax ei, et eam esse duis.
              </p>
            </div>
          </Col>
        </Row>
        <div className="service-reserve-form me-5 ms-5 ps-5 pe-5">
          <Row>
            <Col md={6} className="mt-5">
              <div className="input-field">
                <label htmlFor="">Name*</label>
                <input type="text" placeholder="" />
              </div>
            </Col>
            <Col md={6} className="mt-5">
              <div className="input-field">
                <label htmlFor="">Email*</label>
                <input type="email" placeholder="" />
              </div>
            </Col>
            <Col md={12} className="mt-5">
              <div className="input-field">
                <label htmlFor="">Subject*</label>
                <input type="text" />
              </div>
            </Col>
            <Col md={12} className="mt-5">
              <div className="input-field">
                <label htmlFor="">Message*</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
              </div>
            </Col>
          </Row>
          <div className="msg-btn mt-5 mb-5">
            <button>SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
