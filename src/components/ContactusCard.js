import React, { useState } from 'react'

import { Col, Row } from 'react-bootstrap'



const ContactusCard = () => {

    const [branchesCard, setBranchesCard] = useState(
        [
            {
                image: require('../assets/images/Contactusimages/London.jpg'),
                name: 'LONDON',
                address: '12 ComHill St, Suite 2 London 22222',
                contact: '1-800-000-111 // contact@example.com',
            },
            {
                image: require('../assets/images/Contactusimages/New york.jpg'),
                name: 'NEW YORK',
                address: '40 Park Ave, Brooklyn, New York 70250',
                contact: '1-800-000-111 // contact@example.com',
            },
            {
                image: require('../assets/images/Contactusimages/paris.jpg'),
                name: 'PARIS',
                address: '30 George V St, Suite 1 Paris 33333',
                contact: '1-800-000-111 // contact@example.com',
            },
        ]
    )



    return (
        <div>


            <Row>
                {
                    branchesCard.map((value) => {
                        return (
                            <>
                                <Col md={4}>
                                    <div className="details-place">
                                        <div className="place-image">
                                            <img src={value.image} alt="" />
                                        </div>
                                        <div className="place-name mt-3">
                                            <h2 className='fw-bold'>{value.name}</h2>
                                        </div>
                                        <div className="place-address mt-3">
                                            <p>{value.address}</p>
                                        </div>
                                        <div className="place-contact">
                                            <p>{value.contact}</p>
                                        </div>
                                        <div className="get-direction-button mt-4 mb-3">
                                            <button>GET DIRECTIONS</button>
                                        </div>
                                    </div>
                                </Col>
                            </>
                        )
                    })
                }

            </Row>

        </div>
    )
}

export default ContactusCard
