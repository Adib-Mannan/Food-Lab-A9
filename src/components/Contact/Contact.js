
import React from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-design'>
            <h1>GET IN TOUCH</h1>
            <br />
            <br />
            <p>GET IN TOUCH
                Please fill out the form on this section to contact with us. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
            <br />
            <br />
            <br />
            <input type="text" placeholder="Name" />
            <br />
            <br />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <br />
            <br />
            <input className='input-3' type="text" placeholder="Messege" />
            <br />
            <br />
            <Button variant="light" size="lg">Submit</Button>
        </div>
    );
};

export default Contact;