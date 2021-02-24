import React from 'react'
import { Card, Button, Container, Col, Row } from 'react-bootstrap'

const Booking = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md="6">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>60 min Vinyasa</Card.Title>
                                <Card.Text>$60</Card.Text>
                                <Button variant="primary">Book Online</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col md="6">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>60 min Restorative</Card.Title>
                                <Card.Text>$60</Card.Text>
                                <Button variant="primary">Book Online</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Booking
