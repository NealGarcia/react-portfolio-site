import React, { useState }from 'react';
import resume from '../assets/resume.pdf'
import DarkMode from './DarkMode';
import { Link, animateScroll as scroll } from "react-scroll";
import { ReactComponent as Pin } from '../assets/pin.svg'
import "react-toggle/style.css"
import "../styles/nav.css" 

function Nav(props) {

    function scrollToProjects(){
        scroll.scrollTo(300);
    }

    function scrollToAbout(){
        scroll.scrollTo(1300);
    }
    return (
        <div className="topNavWrapper">
            <div className="topNav">
            <DarkMode />
            <div className="navLinks">
                <a href="#work">Work</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
            <a href="/" className="aboutNav">Neal Garcia</a>
        </div>
        </div>
    );
}

export default Nav;