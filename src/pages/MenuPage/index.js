import React from "react";
import GlobalBannerImage from "../../components/GlobalComponents/GlobalBannerImage";
import MenuCardImage from "../../components/MenuCardImage";



const MenuPage = () => {


    return (
        <>
        <div className="menu-container">
            <div className="menubannerimage">
                <GlobalBannerImage />
            </div>
           

            <div className="menu-card-image">
                <MenuCardImage/>
            </div>
        </div>
        </>
    )
};



export default MenuPage