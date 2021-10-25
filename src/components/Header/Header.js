import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/home">FOODLAB</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className='nav-design' to="/home">Home</NavLink>
                        <NavLink className='nav-design' to="/services">Services</NavLink>
                        <NavLink className='nav-design' to="/about">About</NavLink>
                        <NavLink className='nav-design' to="/contact">Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;