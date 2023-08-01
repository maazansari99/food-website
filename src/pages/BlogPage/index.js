import React from 'react'
import GlobalBannerImage from '../../components/GlobalComponents/GlobalBannerImage'
import { Col, Row } from 'react-bootstrap'

import GlutenMuffins from '../../assets/images/BlogPageImage/gultermuffins.jpg'
import BlogCardFood from '../../components/BlogCardFood'

const BlogPage = () => {



  return (
    <div>
        
<div className="blog-image-banner">
    <GlobalBannerImage></GlobalBannerImage>
</div>
        

<div className="container blog">
    <Row>
        <Col md={9}>
            <div className="blog-food-details mt-5">
                <div className="dessert-food mt-2">
                    <span>Desserts Food</span>
                </div>
                <div className="gluten-muffins-name mt-2">
                    <h2 className='fw-bold'>Gluten Free Muffins</h2>
                </div>
                <div className="date-muffins mt-1">
                    <p>January 15, 2023 Silvia Just</p>
                </div>
                <div className="muffins-image mt-3">
                    <img src={GlutenMuffins} alt="" />
                </div>
                <div className="muffins-info mt-4">
                    <p>Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac. Consectetur adipiscing elit. Vivamus auctor condimentum sem et gravida. Maecenas id enim pharetra, sollicitudin dui eget, blandit lorem. Nunc vitae blandit lectus. Donec lacinia magna sit amet arcu aliquet luctus. Maecenas vehicula metus nisi, nec finibus justo vulputate eget. Pellentesque porta felis id erat sodales condimentum. Nam…</p>
                </div>
                <div className="muffins-read-more-button mt-4">
                    <button>READ MORE</button>
                </div>
            </div>

            <div className="food-blog-card">
                <BlogCardFood></BlogCardFood>
            </div>
        </Col>
        <Col md={3}>

             <div className="categories mt-5">
                <div className="categories-name mb-4">
                    <h5 className='fw-bold'>CATEGORIES</h5>
                </div>
                <div className="categories-list">
                    <ul>
                        <li>Desserts</li>
                        <li>Food</li>
                        <li>Italian</li>
                        <li>Recipes</li>
                    </ul>
                </div>
                <div className="categories-input-text mt-4">
                    <input type="text" name="" id="" placeholder='types and hit enter' />
                </div>

             </div>

             <div className="recent-post mt-5">
                <div className="recent-post-name mb-4">
                    <h5 className='fw-bold'>RECENT POSTS</h5>
                </div>
                <div className="recent-post-list">
                    <ul>
                        <li>Gluten Free Muffins</li>
                        <li>Next Level Steak Sandwich</li>
                        <li>Epic Egg Salad</li>
                        <li>Double-choc brownies</li>
                        <li>Quick Grilled Pizza</li>
                    </ul>
                </div>
             </div>


              <div className="archives mt-5">
             <div className="archives-name mb-4">
                    <h5 className='fw-bold'>ARCHIVES</h5>
                </div>
                <div className="archives-date">
                    <p>January 2023</p>
                </div>
              </div>

              <div className="tags mt-5">
              <div className="tags-name mb-4">
                    <h5 className='fw-bold'>TAGS</h5>
                </div>
                <div className="all-tags-type">
                    <div className="all-tags-name"><a href="">browines</a></div>
                    <div className="all-tags-name"><a href="">chicken</a></div>
                    <div className="all-tags-name"><a href="">corn</a></div>
                    <div className="all-tags-name"><a href="">dessert</a></div>
                    <div className="all-tags-name"><a href="">egg</a></div>
                    <div className="all-tags-name"><a href="">gluten-free</a></div>
                    <div className="all-tags-name"><a href="">mozzarella</a></div>
                    <div className="all-tags-name"><a href="">muffins</a></div>
                    <div className="all-tags-name"><a href="">pizza</a></div>
                    <div className="all-tags-name"><a href="">risotto</a></div>
                    <div className="all-tags-name"><a href="">salad</a></div>
                    <div className="all-tags-name"><a href="">spaghetti</a></div>
                </div>
              </div>


    

        </Col>
    </Row>
</div>




    </div>
  )
}

export default BlogPage
