import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

export default function ReachOut() {

    const stylings = {
        pic: {
            objectFit: "cover",
            maxHeight: '20vh'
        },
        card: {
            maxWidth: '800px'
        }
    }
    return (
        <Container className='mt-5 mb-5 d-flex justify-content-center align-items-center' style={stylings.card}>
            <Row>
                <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title>Contact Info</Card.Title>
                            <Card.Text>Email me at: <a href='mailto:valadezmykel@gmail.com'>valadezmykel@gmail.com</a></Card.Text>
                            <Card.Text>Or message me through  <a href="https://www.linkedin.com/in/mykel-valadez-3b18971b1/" target="_blank" rel="noreferrer" className="iconLinks fab fa-linkedin icon">LinkedIn</a></Card.Text>
                        </Card.Body>
                        <Card.Img variant='bottom' src='personalImgs/IMG_1199.jpeg' style={stylings.pic} />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
