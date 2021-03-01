import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const Testimonial = () => {
    return (
        <>
            <Container id="testimonials">
                <Row>
                    <Col>
                        <h1 className="text-center">Testimonials</h1>
                        <p>
                            I love Cat’s classes! After a session with Cat, I
                            feel energized, calm, positive and reflective. She
                            is knowledgeable and passionate about yoga and eager
                            to share with her students. Cat invites her students
                            to take a journey with her to nourish both our
                            bodies and inner selves. Each class is designed to
                            be a unique mindful experience with a theme or
                            focus. She is intentional and thoughtful in her
                            choice of postures and flows, and she provides
                            excellent instruction, making it easy for beginners
                            to follow along and practice proper alignment while
                            providing challenges for more advanced students.
                        </p>{' '}
                        ​ ​
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Testimonial
