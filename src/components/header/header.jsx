import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link as Scroll } from 'react-scroll';


const Header = () => {
    return <>
        <Navbar expand="lg"  className="fixed-top">
            <Container>
                <Navbar.Brand >
                    <img src="/Image/logo.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Scroll spy={true} activeClass='activeNav' smooth={true} offset={-130} className='nav-link ' to="about">About Us</Scroll>
                        <Scroll spy={true} activeClass='activeNav' smooth={true} offset={-130} className='nav-link ' to="Service">Services</Scroll>
                        <Scroll spy={true} activeClass='activeNav' smooth={true} offset={-130} className='nav-link ' to="work">Works</Scroll>
                        <Scroll spy={true} activeClass='activeNav' smooth={true} offset={-130} className='nav-link ' to="video">gallery</Scroll>
                        <Scroll spy={true} activeClass='activeNav' smooth={true} offset={-130} className='nav-link ' to="design">Design</Scroll>
                    </Nav>
                    <Nav className="ml-auto">
                        <Scroll spy={true} activeClass='activeNav' smooth={true} offset={-130} className='nav-link ' to="hero">+201033631133</Scroll>
                        <NavDropdown title="EN" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">AR</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default Header