import React from 'react';
import avatar from '../assets/avatar.JPG'

function About(props) {
    return (
        <div className = "about">
            <h1 className = "aboutTitle">About Me</h1>
            <div className = "aboutMe">
                <img src = {avatar} alt = "Me" className = "aboutImg"/>
                <p>Hello, 👋  I'm <span>Neal Garcia</span> —  I'm a software engineer, web developer, & tech enthusiast currently based in Dallas, TX. 
                I graduated from the University of Texas at Dallas with a degree in Emerging Media and Communication and am 
                also a graduate of General Assembly's Software Engineering Immersive Program. As a developer I seek to discover solutions, explore new technologies, and write clean and efficient code as I create well-polished applications.
</p>
                <p>When I am not coding, you can find me cycling around White Rock Lake here in Dallas, going for a run, or playing with my dog <a href = "https://www.instagram.com/spaceysagey/">Sage</a>.</p>
                <p id = "social">Find me elsewhere on the web — <a href = "https://www.instagram.com/neal.garcia/">Instagram</a></p>
            </div>
        </div>
    );
}

export default About;