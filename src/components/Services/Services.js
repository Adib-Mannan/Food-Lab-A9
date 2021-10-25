import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='s-design'>
            <h1 className='h-design'>COURSES</h1>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {services.map(service => <Service service={service} key={service.id}></Service>)}
                </Row>

            </div>
        </div>
    );
};

export default Services; <h1>This is service</h1>