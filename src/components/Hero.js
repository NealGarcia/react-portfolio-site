import React, { useState }from 'react';
import resume from '../assets/resume.pdf'
import DarkMode from './DarkMode';
import { Link, animateScroll as scroll } from "react-scroll";
import { ReactComponent as Pin } from '../assets/pin.svg'
import "react-toggle/style.css" 
import "../styles/hero.css" 


function Hero(props) {

    return (
        <div>
            <div className = "heroBanner">
                <h1 className = "heroTitle">
                Hi, I'm <span id = "name">Neal</span>, a full-stack developer currently based in <Pin id = "pin"/> Austin, TX.
                </h1>
                <ul className = "nav">
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a>
                    </li>
                    <li><a href = "https://www.linkedin.com/in/nealgarcia" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href = "https://github.com/neal-garcia95" target="_blank" rel="noreferrer">Github</a></li>
                    <li><a href={resume} target='_blank' rel='noopener noreferrer'>Resume</a></li>
                    <li><a href = "mailto: nathnlgarcia@gmail.com" >Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Hero;