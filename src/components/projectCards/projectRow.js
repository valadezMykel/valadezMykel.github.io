import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BackgroundDiv from './backgroundDiv'
import ProjectInfo from './projectInfo'
import { GetScreenState } from '../../contexts/screenSizeContext'


export default function ProjectRow(props) {
    const isMobile = GetScreenState()

    const stylings = {
        contain: {
            position: 'relative'
        }
    }

    let first;
    let second;

    if(isMobile) {
        second = <ProjectInfo background={props.background} title={props.title} repoLink={props.repoLink} deployLink={props.deployLink} description={props.description} />
        first = <BackgroundDiv isReversed={props.isReversed} image={props.image}/> 
    }
    else if(props.isReversed){
        second = <ProjectInfo background={props.background} title={props.title} repoLink={props.repoLink} deployLink={props.deployLink} description={props.description} />
        first = <BackgroundDiv isReversed={props.isReversed} image={props.image}/>
    } else {
        first = <ProjectInfo background={props.background} title={props.title} repoLink={props.repoLink} deployLink={props.deployLink} description={props.description} />
        second = <BackgroundDiv isReversed={props.isReversed} image={props.image}/> 
    }

    return (
        <Container style={stylings.contain} className='mt-5 mb-5'>
            <Row>
                {first}
                {second}
            </Row>
        </Container>
    )
}