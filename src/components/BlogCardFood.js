import React, { useState } from 'react'

import Blacktea from '../../src/assets/images/BlogPageImage/blog-tea.jpg'


const BlogCardFood = () => {

    const [blogFoodData, setBlogFoodData] = useState([
        {
            image: require('../../src/assets/images/BlogPageImage/blog-tea.jpg'),
            type: 'Food',
            name: 'Next Level Steak Sandwich',
            date: 'January 14, 2023 Silvia Just',
            info: 'Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem...',
        },
        {
            image: require('../../src/assets/images/BlogPageImage/blog-eggs-salad.jpg'),
            type: 'Food Recipes',
            name: 'Epic Egg Salad',
            date: 'January 13, 2023 Silvia Just',
            info: 'Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem...',
        },
        {
            image: require('../../src/assets/images/BlogPageImage/blog-brown-cake.jpg'),
            type: 'Desserts Food Recipes',
            name: 'Double-choc brownies',
            date: 'January 12, 2023 Silvia Just',
            info: 'Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem...',
        },
    ])

    return (
        <div>

            {
                blogFoodData.map((value) => {
                    return (
                        <>
                            <div className="blog-card-container mt-5">
                                <div className="image-blog-card">
                                    <img src={value.image} alt="" />
                                </div>
                                <div className="details-blog-card">
                                    <div className="blog-food-type-card mt-2">
                                        <p>{value.type}</p>
                                    </div>
                                    <div className="blog-food-name-card">
                                        <h2 className='fw-bold'>{value.name}</h2>
                                    </div>
                                    <div className="blog-date-card">
                                        <span>{value.name}</span>
                                    </div>
                                    <div className="blog-info-card mt-4">
                                        <p>{value.info}</p>
                                    </div>
                                    <div className="blog-button-card mt-4">
                                        <button>READ MORE</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }


        </div>
    )
}

export default BlogCardFood
