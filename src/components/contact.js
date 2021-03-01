import React from 'react'
import IG from '../images/Icon-instagram.svg'
import FB from '../images/icon-facebook.svg'

import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
    return (
        <>
            <Container id="contact" className="contact">
                <Row>
                    <Col>
                        <h1 className="text-center">
                            <span role="img">👋 </span> Get In Touch!
                        </h1>
                        <Form>
                            <Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        type="name"
                                        placeholder="Full name"
                                        required
                                    />
                                </Form.Group>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    rows={6}
                                    placeholder="Message..."
                                    required
                                />
                            </Form.Group>
                        </Form>
                        <Button type="submit">Submit</Button>

                        <footer className="footer">
                            <a
                                href="https:www.instagram.com/catquinnyoga/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="footer-icon"
                                    src={IG}
                                    alt="instagram"
                                />
                            </a>

                            <a
                                href="https://www.facebook.com/profile.php?id=100008939167220"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className="footer-icon"
                                    src={FB}
                                    alt="instagram"
                                />
                            </a>

                            <address className="footer__text">
                                <span> 604. 348. 6438 | Bowen Island, BC</span>{' '}
                                <br /> ©{new Date().getFullYear()} Built with{' '}
                                <span role="img">❤️ </span> in Vancouver
                            </address>
                        </footer>
                    </Col>
                </Row>

                {/* <div className="nav-bottom">
                    <span>Home</span>
                    <span>About</span>
                    <span>Booking</span>
                    <span>Testimonials</span>
                    <span>Contact</span>
                </div> */}
            </Container>
        </>
    )
}

export default Contact
