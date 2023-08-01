import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/png/logo-dina-white-1.png";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "../../assets/images/svg/hamburger-menu.svg";

const HeaderComponent = ({ offset }) => {
    // const [openClosedToggel, setOpenClosedToggel] = useState(false)

    // console.log("openClosedToggel", openClosedToggel);

    // const ToggelVisibilty = () => {
    //     setOpenClosedToggel(!openClosedToggel)
    // }


    const [pathname, setPathname] = useState('')
    const location = useLocation();

    useEffect(() => {
        setPathname(location.pathname)
    }, [])


    return (
        <>
            <div className="main-container">
                <header>
                    <div className={pathname == "/" ? offset >= 300 ? "header-with-scroll" : "header-without-scroll" : offset >= 250 ? "header-with-scroll" : "header-without-scroll"}>
                        <div className="head-top pt-2 ps-3 pe-3 d-flex justify-content-between align-items-center">
                            <div className="header-address ">
                                <span> 40 Park Ave, Brooklyn, <br />  New York 70250 </span>
                            </div>
                            <div className="head-name">
                                <div className="head-logo">
                                    <img src={Logo} alt="" />
                                </div>
                            </div>
                            <div className="cell ">
                                <span>Book Now <br />  +1-222-333-444 </span>
                            </div>
                        </div>
                        <div className="head-bttm d-flex justify-content-center align-items-center">
                            
                                <div className="nav">
                                    <ul>
                                        <li><Link to={'/'}  >Home</Link></li>
                                        <li><Link to={'/menu'}>Menu</Link></li>
                                        <li><Link to={"/about"}>About Us</Link></li>
                                        <li><Link to={'/reservation'}>Reservation</Link></li>
                                        <li><Link to={'/services'}>Service</Link></li>
                                        <li><Link to={'/gallery'}>Gallery</Link></li>
                                        <li><Link to={'/blog'}>Blog</Link></li>
                                        <li><Link to={'/contact'}>Contact</Link></li>
                                    </ul>
                                </div>
                            
                        </div>
                    </div>
                    {/* <div className="header-with-scroll">
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>PORTFOLIO</li>
                <li>BLOG</li>
                <li>CONTACT US</li>
            </ul>
          </div> */}


                    {/* <div className="responsive-header d-flex justify-content-between">
                        <div className="left-head p-2">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="right-head" onClick={ToggelVisibilty}>
                            <img src={MenuIcon} alt="" />
                        </div>
                    </div> */}
                </header >
            </div >
        </>
    );
};

export default HeaderComponent;
