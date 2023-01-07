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
                <div className = "heroTitle">
                    <h1>I'm Neal Garcia, <br/>Web Developer.</h1>
                    <p>I'm a Junior Front-End Developer who aims to craft tailor-made, digital experiences on mobile and web. I'm currently working as a Junior Web Developer @ <a target="_blank" href="https://www.builtbymasonry.com">MASONRY</a></p>
                </div>
            </div>
        </div>
    );
}

export default Hero;