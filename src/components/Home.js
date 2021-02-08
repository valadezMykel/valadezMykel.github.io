import React from 'react'
import PortfolioImage from './homeComponents/ProfileImage'

export default function Home() {
    return (
    <>
        <PortfolioImage backgroundColor={'rgb(230,225,215)'} reversed={false} image={'personalImgs/IMG_1242.jpeg'} 
            text={"Hi, I'm Mykel Valadez and I help people and business' get their ideas out on the internet.  It's time for you to reach out to new customers and patrons, and show them what you bring to the table."}
            title={"Bring your web dream to life!"}/>
        <PortfolioImage backgroundColor={'white'} reversed={true} image={'personalImgs/IMG_1192.jpeg'} 
            text={"You want to create something new, something that helps people and share it with as many people as you can.  That is what I wan too.  When I was a kid I told my Dad I wanted to save the world by making cars run on dreams.  Today I hold on to that sentiment and strive make the world a better place, now with the tools of technology."}
            title={"Where your interests and mine meet"}/>
 
    </>
    )
}