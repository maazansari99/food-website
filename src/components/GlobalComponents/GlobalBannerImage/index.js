import React, { useEffect, useState } from "react";
import Aboutus from "../../../assets/images/aboutus/about-us-bg.jpg";
import MenuImage from "../../../assets/images/BackgroundImages/menu-3col-image-3.jpg";
import BlogBanner from '../../../assets/images/BackgroundImages/slider-2-3.jpg'
import ContactBanner from '../../../assets/images/BackgroundImages/top-img-6-3.jpg'
import { useLocation } from "react-router-dom";

const GlobalBannerImage = () => {
  
  const [pathname, setPathname] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, []);
  return (
    <div>

      {/* //-----------------------   about us -------------------------------------------// */}
      {   pathname == "/about" ? 
        <div className="about-us-main">
          <div className="about-bg-image">
            <img src={Aboutus} alt="" />
          </div>
          <div className="about-topic-name">
            <h1>ABOUT US</h1>
            <p>We're passionate about cooking</p>
          </div>
        </div>
       : null}

			 {/* ----------------MENU PAGE--------------- */}
			     {pathname == "/menu" ? 
        <div className="about-us-main">
          <div className="about-bg-image">
            <img src={MenuImage} alt="" />
          </div>
          <div className="about-topic-name">
            <h1>Menu</h1>
            <p>We're passionate about cooking</p>
          </div>
        </div>
       : null}

{/* ---------------------RESERVATION------------------- */}
{pathname == "/reservation" ? 
        <div className="reserve-table">
        <h1>BOOK YOUR TABLE</h1>
        <span>We accept reservation. Call us or complete the form below</span>
      </div>
       : null}

{/* ----------------------SERVICE--------------- */}

{pathname == "/services" ? 
        <div className="service-page-banner">
        <h1>SERVICES</h1>
        <span>open since 1970</span>
      </div>
       : null}

			 
			{/*----------------GALLERY----------------------  */}

			{pathname == "/gallery" ? 
        <div className="gallery-banner">
        <div className="on-banner">
        <h2>GALLERY</h2>
        <span>Aenean nibh risus, rhoncus eget</span>
        </div>
      </div>
       : null}

			 {/* ---------------BLOG---------- */}

			 {pathname == "/blog" ? 
        <div className="about-us-main">
          <div className="about-bg-image">
            <img src={BlogBanner} alt="" />
          </div>
          <div className="about-topic-name">
            <h1>BLOG</h1>
            <p>View the latest articles</p>
          </div>
        </div>
       : null}


			 {/* ---------------------CONTACT --------------*/}

			 {pathname == "/contact" ? 
        <div className="about-us-main">
          <div className="about-bg-image">
            <img src={ContactBanner} alt="" />
          </div>
          <div className="about-topic-name">
            <h1>CONTACT</h1>
            <p>We love to hear from you</p>
          </div>
        </div>
       : null}



    </div>
  );
};

export default GlobalBannerImage;
