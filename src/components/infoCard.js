import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'


export default function InfoCard() {
    const stylings = {
        backgroundColor: 'white',
        padding: '20px',

    }

    return (
        <Container >
            <Row>
                <Col style={stylings}>Hi I'm Mykel</Col>
            </Row>
        </Container>
    )
}