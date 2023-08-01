import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'



const TeamCard = () => {

    const [teamproductcard, setTeamProductCard] = useState([
        {
            image: require('../src/assets/images/aboutus/silvia just.jpg'),
            name: 'Silvia Just',
            class: 'owner',
            Phone: '000 - 111 - 2222',
            Email: ' silvia@dina.com',
            info: 'Short text description here. Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac.',
        },
        {
            image: require('../src/assets/images/aboutus/milk-right.jpg'),
            name: 'Mike Right',
            Phone: '000 - 111 - 2222',
            class: 'Chief',
            Email: ' mikeright@dina.com',
            info: 'Short text description here. Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac.',
        },
        {
            image: require('../src/assets/images/aboutus/anna-robinson.jpg'),
            name: 'Anna Robinson',
            Phone: '000 - 111 - 2222',
            class: 'Chef',
            Email: ' annarobinson@dina.com',
            info: 'Short text description here. Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac.',
        },
        {
            image: require('../src/assets/images/aboutus/jogn-smith.jpg'),
            name: 'John Smith',
            Phone: '000 - 111 - 2222',
            class: 'manager',
            Email: ' johnmanager@dina.com',
            info: 'Short text description here. Maecenas ornare varius mauris eu commodo. Aenean nibh risus, rhoncus eget consectetur ac.',
        }
    ])



    return (
        <div>

            <Row>
                {
                    teamproductcard.map((value) => {
                        return (
                            <>
                                <Col md={3}>
                                    <div className="image-team-card">
                                        <div className="person-image">
                                            <img src={value.image} alt="" />
                                        </div>
                                        <div className="person-name d-flex flex-column align-items-center mt-3">
                                            <h3 className='fw-bold'>{value.name}</h3>
                                            <p>{value.class}</p>
                                        </div>
                                        <div className="person-contact d-flex flex-column">
                                            <span>Phone:{value.Phone}</span>
                                            <span>Email:{value.Email}</span>
                                        </div>
                                        <div className="person-info mt-3">
                                            <p>{value.info}</p>
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

export default TeamCard
