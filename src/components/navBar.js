import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
// import Brand from '../images/brand.svg'

const CustomNavbar = ({ pageInfo }) => {
    console.log(pageInfo)
    return (
        <>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                        <Nav.Link href="#private">Booking</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default CustomNavbar
