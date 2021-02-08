import React from 'react'
import { Col, Image } from 'react-bootstrap'
import { GetScreenState } from '../../contexts/screenSizeContext'

export default function backgroundDiv(props) {

    const isMobile = GetScreenState()
    const boxShadow = props.isReversed ? '-2vw -2vh rgb(214,212,113)' : '2vw -2vh rgb(214,212,113)'

    const styles = {

        project: {
            backgroundColor: 'white',
            // height: '30vh',
            // border: '5px solid rgb(230,225,215)',
            // boxShadow: isMobile ? '0px 0px' : boxShadow,
        },

        img: {
            objectFit: "contain",
            // height: '40vh',
            border: '5px solid rgb(230,225,215)',
            boxShadow: isMobile ? '0px 0px' : boxShadow,
        }
    }

    return (

        <Col fluid md={4} style={styles.project}>
            <Image fluid src={props.image} style={styles.img} /> 
        </Col>

    )
}