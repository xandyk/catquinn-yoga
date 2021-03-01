import React from 'react'
import {
    Card,
    Button,
    Container,
    Col,
    Row,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap'

import Vinyasa from '../images/vinyasa.png'
import Restorative from '../images/restorative.png'
import Hatha from '../images/hatha.png'

const Booking = () => {
    return (
        <>
            <Container>
                <h1 id="private" className="text-center">
                    Private Classes
                </h1>
                <Row>
                    <Col md="4">
                        <Card className="card">
                            <Card.Img variant="top" src={Vinyasa} />
                            <Card.Body>
                                <Card.Title>Vinyasa</Card.Title>
                                <Card.Text>
                                    A faster paced flow focusing on dynamic
                                    movement, flexibility and strength building.
                                    All levels welcome!{' '}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>1 hr | $60</ListGroupItem>
                                <Button variant="primary">Book Now</Button>
                            </ListGroup>
                        </Card>
                    </Col>

                    <Col md="4">
                        <Card className="card">
                            <Card.Img variant="top" src={Restorative} />
                            <Card.Body>
                                <Card.Title>Restorative</Card.Title>

                                <Card.Text>
                                    Allow the weight to release from you
                                    shoulders as you completely relax into the
                                    poses. Poses are held for a longer period of
                                    time, which allows the muscles to let go and
                                    completely melt into the props. All levels
                                    welcome!
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>1hr | $60</ListGroupItem>
                                <Button variant="primary">Book Now</Button>
                            </ListGroup>
                        </Card>
                    </Col>

                    <Col md="4">
                        <Card className="last">
                            <Card.Img variant="top" src={Hatha} />
                            <Card.Body>
                                <Card.Title>Hatha</Card.Title>
                                <Card.Text>
                                    Focus on proper foundation and alignment
                                    working with the biomechanics of the body.
                                    All levels welcome!
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>1 hr | $60</ListGroupItem>
                                <Button variant="primary">Book Now</Button>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Booking
