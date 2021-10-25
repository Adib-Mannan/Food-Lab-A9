import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './service.css'

const Service = (props) => {
    const { name, img, price, detail, seats } = props.service;
    return (
        <div>
            <Col>
                <Card className='card' style={{ height: '700px' }}>
                    <Card.Img variant="top" src={img} rounded />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {detail}
                        </Card.Text>
                        <h2>Price :${price}</h2>
                        <h2>Seats : {seats}</h2>
                        <Button variant="dark">Buy Now</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Service;