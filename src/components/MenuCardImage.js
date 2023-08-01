import React, { useState } from 'react'

import image from '../assets/images/Menucardimages/summer-berry-3.jpg'
import { Col, Row } from 'react-bootstrap'

const MenuCardImage = () => {

    const [menucarddata, setMenuCardData] = useState(
        [
            {
               image:require('../assets/images/Menucardimages/summer-berry-3.jpg'),
               name:'SUMMER BERRY AND COCONUT TART',
               info:'Raspberries, blackberries, blueberries, graham cracker crumbs',
               price:'$12.00 / $20.00',
            },
            {
               image:require('../assets/images/Menucardimages/pumpkin-cookies-1.jpg'),
               name:'PUMPKIN COOKIES CREAM CHEESE',
               info:'Pumpkin, sugar, butter, eggs',
               price:'$10.00',
            },
            {
               image:require('../assets/images/Menucardimages/chocolate-cupcakes-2.jpg'),
               name:'DOUBLE CHOCOLATE CUPCAKES',
               info:'Chocolate, eggs, vanilla, milk',
               price:'$7.00',
            },
            {
               image:require('../assets/images/Menucardimages/terrific-turkey-chili-2.jpg'),
               name:'TERRIFIC TURKEY CHILI',
               info:'Turkey, oregano, tomato paste, peppers',
               price:'$8.00',
            },
            {
               image:require('../assets/images/Menucardimages/italian-sausage-tortellini-soup-2.jpg'),
               name:'ITALIAN SAUSAGE TORTELLINI',
               info:'Cheese tortellini, sausage, garlic, carrots, zucchini',
               price:'$9.00',
            },
            {
               image:require('../assets/images/Menucardimages/cream-asparagus-soup-2.jpg'),
               name:'CREAM OF ASPARAGUS SOUP',
               info:'Asparagus, potato, celery, onion, pepper',
               price:'$10.00',
            },
            {
               image:require('../assets/images/Menucardimages/italian-sausage-soup-2.jpg'),
               name:'ITALIAN SAUSAGE SOUP',
               info:'Italian sausage, garlic, carrots, zucchini',
               price:'$9.00',
            },
            {
               image:require('../assets/images/Menucardimages/creamy-chicken-wild-rice-soup-2.jpg'),
               name:'CREAMY CHICKEN & WILD RICE SOUP',
               info:'Cooked chicken, salt, butter, heavy cream',
               price:'$12.00',
            },
            {
               image:require('../assets/images/Menucardimages/delicious-ham-potato-soup-1.jpg'),
               name:'HAM AND POTATO SOUP',
               info:'Potatoes, ham, celery, onion, milk',
               price:'$10.00',
            },
            {
               image:require('../assets/images/Menucardimages/pork-chops-1.jpg'),
               name:'BRAISED PORK CHOPS',
               info:'4 bone-in pork chops, olive oil, garlic, onion',
               price:'$21.00',
            },
            {
               image:require('../assets/images/Menucardimages/prime-rib-primer-1.jpg'),
               name:'PRIME RIB',
               info:'Rib, rosemary, black pepper, red wine',
               price:'$20.00',
            },
            {
               image:require('../assets/images/Menucardimages/coconut-curry-fried-chicken-3.jpg'),
               name:'COCONUT FRIED CHICKEN',
               info:'8 chicken pieces, coconut milk, oil',
               price:'$19.00',
            },
            {
               image:require('../assets/images/Menucardimages/sriracha-beef-skewers-1.jpg'),
               name:'SRIRACHA BEEF SKEWERS',
               info:'Beef, garlic, sesame oil, vinegar',
               price:'$12.00',
            },
            {
               image:require('../assets/images/Menucardimages/roast-chicken-2.jpg'),
               name:'CHICKEN WITH GARLIC & TOMATOES',
               info:'Chicken, cherry tomatoes, olive oil, dry white wine',
               price:'$12.00',
            },
            {
               image:require('../assets/images/Menucardimages/double-tomato-bruschetta-2.jpg'),
               name:'TOMATO BRUSCHETTA',
               info:'Tomatoes / Olive Oil / Cheese',
               price:'$4.00',
            },
            {
               image:require('../assets/images/Menucardimages/marinated-grilled-shrimp-2.jpg'),
               name:'MARINATED GRILLED SHRIMP',
               info:'Fresh Shrimp / Oive Oil / Tomato Sauce',
               price:'$7.00',
            },
            {
               image:require('../assets/images/Menucardimages/avocado-tomato-3.jpg'),
               name:'AVOCADO & MANGO SALSA',
               info:'Avocado / Mango / Tomatoes',
               price:'$5.00',
            },
            {
               image:require('../assets/images/Menucardimages/baked-potato-skins-2.jpg'),
               name:'BAKED POTATO SKINS',
               info:'Potatoes / Oil / Garlic',
               price:'$9.00',
            },
        ]
    )


    return (
        <div>
            <div className="container menu-card mt-5">
                <Row>
                    {
                        menucarddata.map((value)=>{
                          return(
                            <>
                                 <Col md={4}>
                        <div className="menu-post-dish mt-2">
                            <div className="menu-image-dishes">
                                <img src={value.image} alt="" />
                            </div>
                            <div className="menu-images-dish-all">
                                <div className="menu-image-dishes-name">
                                    <h4>{value.name}</h4>
                                </div>
                                <div className="menu-image-dishes-info">
                                    <p>{value.info}</p>
                                </div>
                                <div className="menu-image-dishes-price mt-4">
                                    <h2>{value.price}</h2>
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
    )
}

export default MenuCardImage
