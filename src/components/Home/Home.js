import React from 'react';
import './Home.css'
import img from '../../images/Group 8425.png'
import { Button, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import { Link } from 'react-router-dom';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services-2.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className='custom-color'>FOOD-LAB</h1>
            <div className='container'>

                <div className='custom-font'>
                    <h1>In our School you can learn how to cook</h1>
                    <Link className='link-design' to='services'><Button variant="dark">Courses</Button></Link>


                    <Link to='about'><Button variant="dark">About</Button></Link>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
            {/* timing */}
            <div className='container-2'>
                <div className='custom-box-1'>
                    <h3>Our Next Course</h3>
                    <p><small>Learn how to make an <br /> Italian Pizza. ON: 25 October</small></p>
                    <Link to='./services'> <Button variant="light">Purchase</Button></Link>
                </div>
                <div className='custom-box-2'>
                    <h3>Opening Hours</h3>
                    <h4>Mon - Fri  _  8:00 - 17:00</h4>
                    <h4>Saturday  _   9:30 - 17:30</h4>
                    <h4>Sunday    _   9:30 - 17:30</h4>
                </div>
            </div>
            {/* services section  */}
            <div className='s-sec'>
                <h1 className='custom-color'>Courses</h1>
                <Row xs={1} md={3} className="g-4">
                    {services.map(service => <Service service={service} key={service.id}></Service>)}
                </Row>

            </div>
        </div>
    );
};

export default Home;