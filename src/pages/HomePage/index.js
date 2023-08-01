import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import HotelWay from "../../assets/images/FrontBanner/about-7-3.jpg";
import centerLogo from "../../assets/images/png/taste-food-1.png";
import DropDownSvg from "../../assets/images/svg/arrow-drop-down-svgrepo-com.svg";
import TomatoImg from "../../assets/images/Food/double-tomato-bruschetta-2-400x400.jpg";
import GrilledImg from "../../assets/images/Food/marinated-grilled-shrimp-2-400x400.jpg";
import AvacadoImg from "../../assets/images/Food/avocado-tomato-3-400x400.jpg";
import PotatoImg from "../../assets/images/Food/baked-potato-skins-2.jpg";
import WineExperience from "../../assets/images/FrontBanner/about-8-3.jpg";
import FoodDrink from "../../assets/images/BackgroundImages/about-9-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import HomeScreenImageBanner from "../../components/HomeScreenComponents/HomeScreenBannerImage";
import FreshFoodServiceCard from "../../components/HomeScreenComponents/FreshFoodServiceCard";


const HomePage = () => {


  const[homeMenuStarter, setHomeMenuStarter ] = useState([
    {
      image: require('../../assets/images/Food/double-tomato-bruschetta-2-400x400.jpg'),
      name: "TOMATO BRUSCHETTA",
      // dots:
      price: '$4.00',
      itemOptions: 'Tomatoes / Olive Oil / Cheese'
    },
    {
      image: require('../../assets/images/Food/marinated-grilled-shrimp-2-400x400.jpg'),
      name: 'MARINATED GRILLED SHRIMP',
      // dots:
      price: '$7.00',
      itemOptions: 'Fresh Shrimp / Oive Oil / Tomato Sauce'
    },
    {
      image: require('../../assets/images/Food/avocado-tomato-3-400x400.jpg'),
      name: 'AVOCADO & MANGO SALSA',
      // dots:
      price: '$5.00',
      itemOptions: 'Avocado / Mango / Tomatoes'
    },
    {
      image: require('../../assets/images/Food/baked-potato-skins-2.jpg'),
      name: 'BAKED POTATO SKINS',
      // dots:
      price: '$9.00',
      itemOptions: 'Potatoes / Oil / Garlic'
    }
  ])


  const [homeMainCources, setHomeMainCources ] = useState([
    {
      image: require('../../assets/images/Food/Main Cources/pork-chops-1-400x400.jpg'),
      name: "BRAISED PORK CHOPS",
      // dots:
      price: '$21.00',
      itemOptions: '4 bone-in pork chops, olive oil, garlic, onion'
    },
    {
      image: require('../../assets/images/Food/Main Cources/prime-rib-primer-1.jpg'),
      name: 'PRIME RIB',
      // dots:
      price: '$20.00',
      itemOptions: 'Rib, rosemary, black pepper, red wine'
    },
    {
      image: require('../../assets/images/Food/Main Cources/coconut-curry-fried-chicken-3.jpg'),
      name: 'COCONUT FRIED CHICKEN',
      // dots:
      price: '$19.00',
      itemOptions: '8 chicken pieces, coconut milk, oil'
    },
    {
      image: require('../../assets/images/Food/Main Cources/sriracha-beef-skewers-1.jpg'),
      name: 'SRIRACHA BEEF SKEWERS',
      // dots:
      price: '$12.00',
      itemOptions: 'Beef, garlic, sesame oil, vinegar'
    },
    {
      image: require('../../assets/images/Food/Main Cources/roast-chicken-2.jpg'),
      name: 'CHICKEN WITH GARLIC & TOMATOES',
      // dots:
      price: '$12.00',
      itemOptions: 'Chicken, cherry tomatoes, olive oil, dry white wine'
    }
  ])





  const [openClosedToggel, setOpenClosedToggel] = useState(false);

  console.log("openClosedToggel", openClosedToggel);

  const ToggelVisibilty = () => {
    setOpenClosedToggel(!openClosedToggel);
  };
  const ToggelVisibilty2 = () => {
    setOpenClosedToggel(!openClosedToggel);
  };
  return (
    <>
      <div className="home-container">
        <HomeScreenImageBanner />

        <FreshFoodServiceCard />

        <div className="container about-home mb-5 pt-5 pe-4 ps-4">
          <Row>
            <Col md={6}>
              <div className="history-about ms-5 ps-4">
                <div className="history">
                  <span>HISTORY</span>
                  <h1>ABOUT US</h1>
                </div>
                <span className="mt-4">
                  Welcome to Dina, a modern restaurant with a focus on premium
                  food tastes
                </span>
                <p className="pt-5">
                  We invite you to celebrate our restaurant’s delicious recipes
                  whether you are here for a business lunch or dinner. Discover
                  new tastes and inspired recipes from all over the world.
                </p>
                <div className="find-btn pt-4">
                  <button>FIND MORE</button>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="hotel-image  ms-5">
                <img src={HotelWay} alt="" />
              </div>
            </Col>
          </Row>
        </div>
        <div className="speciality-hotel mb-5">
          <div className="center-img d-flex justify-content-center align-items-center">
            <img src={centerLogo} alt="" />
          </div>
        </div>




        <div className="menu-container mb-5">
          <div className="container menu-content">
            <div className="menu">
              <span>DISCOVER</span>
              <h1>OUR MENU</h1>
              <p className="pt-4 pb-5">
                Explore texture, color and of course the ultimate tastes with
                our menu of the season. All the ingredients are fresh and
                carefully selected by our chefs. <br /> Enjoy an extraordinary
                dinning experience.
              </p>
            </div>



            <div className={`accordion ${openClosedToggel ? 'open' : ''}`}>
              <div className="accordion-header" onClick={ToggelVisibilty}>
                <div className="drop-down-container">
                  <FontAwesomeIcon className="rc-accordion-icon" icon={faChevronDown} />
                  <h1>STARTERS</h1>
                </div>
              </div>



              <div className="accordion-content menu-lists">
                <Row>

                  {
                    homeMenuStarter.map((value)=>{
                      return(
                        <>
                        
                    <Col md={6} className="mb-3">
                      <div className="item-1">
                        <div className="tomato-img">
                          <img src={value.image} alt="" />
                        </div>
                        <div className="about-item ps-2">
                          <div className="item-name-price d-flex justify-content-between">
                            <span className="name">{value.name}</span>
                            <span className="menu-dots"></span>
                            <span className="price">{value.price}</span>
                          </div>
                          <div className="itemOptions">
                            <span>{value.itemOptions}</span>
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
            
            <div className={`accordion ${openClosedToggel ? 'open' : ''}`}>
              <div className="accordion-header" onClick={ToggelVisibilty}>
                <div className="drop-down-container">
                  <FontAwesomeIcon className="rc-accordion-icon" icon={faChevronDown} />
                  <h1>MAIN COURCES</h1>
                </div>
              </div>



              <div className="accordion-content menu-lists">
                <Row>

                  {
                    homeMainCources.map((value)=>{
                      return(
                        <>
                        
                    <Col md={6} className="mb-3">
                      <div className="item-1">
                        <div className="tomato-img">
                          <img src={value.image} alt="" />
                        </div>
                        <div className="about-item ps-2">
                          <div className="item-name-price d-flex justify-content-between">
                            <span className="name">{value.name}</span>
                            <span className="menu-dots"></span>
                            <span className="price">{value.price}</span>
                          </div>
                          <div className="itemOptions">
                            <span>{value.itemOptions}</span>
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


            <div className="view-btn d-flex justify-content-center pt-4">
              <button>VIEW MENU</button>
            </div>
          </div>
        </div>

        <div className="reserve-hotel mt-5">
          <div className="hotel-timing">
            <div className="table-book">
              <span>RESERVE A TABLE</span>
              <h1>OPEN HOURS</h1>
            </div>
            <div className="reserving-time pt-4 pb-5">
              <span>MONDAY - FRIDAY: 10 AM - 11 PM</span>
              <span className="pt-4">SATURDAY - SUNDAY: 9 AM - 1 PM</span>
            </div>
            <div className="book-btn pt-4">
              <button>BOOK NOW</button>
            </div>
          </div>
        </div>
        <div className="experience-wine">
          <div className="container mt-5 mb-5">
            <Row>
              <Col md={6} className="d-flex justify-content-end">
                <div className="wine-ex-image ms-5">
                  <img src={WineExperience} alt="" />
                </div>
              </Col>
              <Col md={6}>
                <div className="wine-about me-5 pe-5">
                  <div className="exp d-flex flex-column align-items-end">
                    <span>EXPERIENCE</span>
                    <h1>WINE</h1>
                  </div>
                  <span className="mt-4 text-end">
                    A unique dinner works best with wine pairing
                  </span>
                  <p className="pt-5 text-end">
                    You can choose from a variety of styles, light and easy
                    drinking, fresh and aromatic white wines or you could try
                    intense and elegant red wines. Creative cuisine involves
                    sophisticated wines.
                  </p>
                  <p className="text-end">
                    Vestibulum eleifend gravida neque a bibendum. Vivamus
                    viverra velit non cursus elementum. Donec sit amet posuere
                    ipsum. Mauris rutrum sagittis sapien text link. In vitae
                    ipsum eleifend, auctor turpis in, vestibulum dui. Ut
                    vestibulum, lorem id eleifend mollis, urna augue imperdiet
                    ante, vitae aliquam turpis mauris eget nisi.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="food-drinks d-flex flex-column align-items-center justify-content-center mt-5">
          <div className="visit d-flex flex-column align-items-center">
            <span>VISIT US</span>
            <h1>GOOD FOOD AND DRINKS</h1>
          </div>
          <div className="about-visit text-center pt-4">
            <p>
              Donec suscipit lobortis ornare. Aenean vel varius odio. <br />{" "}
              Cras ligula odio, congue vel adipiscing non, congue vitae neque.
            </p>
          </div>
          <div className="book-btn pt-4">
            <button>BOOK NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
