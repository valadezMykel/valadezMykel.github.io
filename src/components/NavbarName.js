import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import { GetScreenState } from '../contexts/screenSizeContext'
import { Link } from 'react-router-dom'



export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const isMobile = GetScreenState()

    const stylings = {

        nameLink: {
            fontSize: '12vh',
            color: 'rgb(141,77,90)'
    
        },
        textLinks: {
            fontSize: '2.5vh',
            color: 'black',
            display: 'inline-block',
    
        },
        iconLinks: {

            color: 'black',
            fontSize: '5.5vh',
            display: 'inline-block',
        }
    }

    const verticalOrNot = isMobile ? 'justify-content-around align-items-center flex-column' : 'justify-content-around align-items-center'

    useEffect(() => {
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {

        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
        }
    })

    return (
        <Nav className={verticalOrNot} id='Nav' style={{position: 'relative', zIndex: "auto"}}>
            <Nav.Item>
                <Nav.Link style={stylings.textLinks} className='textLink' >
                    <Link  style={stylings.textLinks} to={{ pathname: '/projects'}} className='textLink'>Projects</Link>
                </Nav.Link>
                <Nav.Link style={stylings.textLinks} >
                    <Link  style={stylings.textLinks} to={{ pathname: '/contact'}} className='textLink'>Reach Out !</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id='myName' style={stylings.nameLink} href="/">
                    <p>Mykel
                    Valadez</p>
                </Nav.Link>  
            </Nav.Item>
            <Nav.Item style={{
                position: scrolled ? 'fixed' : '',
                right: scrolled ? '0' : '',
                bottom: scrolled ? '0' : '',
                zIndex: scrolled ? '10' : '',
            }}>
                <Nav.Link 
                    style={stylings.iconLinks} 
                    href ="https://github.com/valadezMykel" className="iconLinks fab fa-github icon" target="_blank">
                </Nav.Link>
                <Nav.Link 
                    style={stylings.iconLinks} 
                    href="https://www.linkedin.com/in/mykel-valadez-3b18971b1/" target="_blank" className="iconLinks fab fa-linkedin icon">
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}