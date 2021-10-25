import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>About us</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">In this Page you can learn how to cook . </Card.Subtitle>
                    <Card.Text>
                        There is many types of dishes in our page .you can buy those Course and learn how to make many dishes like burger ,pizza ,salad , etc . There is also a course basic about cooking .where you can learn how to cook how to manage things etc .
                    </Card.Text>
                    <h1>You can Buy courses </h1>
                    <Link to="./services"> <Button variant="dark">Services</Button></Link>
                    <h1>You can Contact with us.</h1>
                    <Link to="./contact"> <Button variant="dark">Contact us</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About; <h1>This is Header</h1>