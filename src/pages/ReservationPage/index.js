import React from "react";
import ReservationImage from "../../assets/images/BackgroundImages/reservation-image-3.jpg";
import { Col, Row } from "react-bootstrap";
import GlobalBannerImage from "../../components/GlobalComponents/GlobalBannerImage";

const ReservationPage = () => {
  return (
    <>
<div className="reservation-container">
  <GlobalBannerImage/>
</div>

      <div className="container reservation-form mt-5">
        <div className="form-heading pt-5">
          <h1>MAKE A RESERVATION</h1>
          <p>
            You can make a reservation any time online or by calling (000) 111
            2222 during our opening hours:
          </p>
        </div>
        <div className="form me-5 ms-5">
          <Row>
            <Col md={4} className="mt-5">
              <div className="input-field">
                <label htmlFor="">Name*</label>
                <input type="text" placeholder="" />
              </div>
            </Col>
            <Col md={4} className="mt-5">
              <div className="input-field">
                <label htmlFor="">Email*</label>
                <input type="email" placeholder="" />
              </div>
            </Col>
            <Col md={4} className="mt-5">
              <div className="input-field">
                <label htmlFor="">Phone*</label>
                <input type="call" placeholder="" />
              </div>
            </Col>
            <Col md={4} className="mt-5">
              <div className="input-field">
                <label htmlFor="">Date*</label>
                <input type="date" placeholder="" />
              </div>
            </Col>
            <Col md={4} className="mt-5">
              <div className="input-field">
                <label htmlFor="">Time*</label>
                <input type="time" placeholder="" />
              </div>
            </Col>
            <Col md={4} className="mt-5">
              <div className="input-field">
                <label htmlFor="">Seat*</label>
                <input type="seat" placeholder="" />
              </div>
            </Col>
            <Col className="mt-5">
          <div className="spl-requests input-field">
            <label htmlFor="">Special Requests</label>
            {/* <input type="text" name="" id="" /> */}
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>
        </Col>
          </Row>
        </div>
        <div className="reserve-book-btn mt-5">
          <button>BOOK NOW</button>
        </div>
      </div>
    </>
  );
};

export default ReservationPage;
