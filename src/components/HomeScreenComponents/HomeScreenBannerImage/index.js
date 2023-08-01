import React from "react";
import BannerOne from "../../../assets/images/FrontBanner/slider-1-3.jpg";
import BannerTwo from "../../../assets/images/FrontBanner/slider-2-3.jpg";
import BannerThree from "../../../assets/images/FrontBanner/slider-2-3.jpg";



const HomeScreenImageBanner = () => {



    return (
        <>
            <div className="banner-image">
                <img src={BannerOne} alt="" />
                <div className="welcome">
                    <h1>WELCOME</h1>
                    <p>Traditional dishes with local products of highest quality</p>
                    <div className="booking-btn">
                        <button>BOOK A TABLE</button>
                    </div>
                </div>
            </div>





            

        </>
    )
}

export default HomeScreenImageBanner