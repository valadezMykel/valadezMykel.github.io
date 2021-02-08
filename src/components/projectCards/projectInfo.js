import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function projectInfo(props) {

    const stylings = {
        col: {
            backgroundColor: props.background,
            // 'rgb(208,205,219)',
            padding: '20px'
        }
    }

    return (
        <Col md={8}style={stylings.col}>
            <h2>{props.title}</h2>
            <h6>Repository Link: <Link to={{ pathname: props.repoLink}} target='blank'>Repo</Link></h6>
            <h6>Live Project Link: <Link to={{ pathname: props.deployLink}}  target='_blank'>Live</Link></h6>
            <p>{props.description}</p>
        </Col>
    )
}
