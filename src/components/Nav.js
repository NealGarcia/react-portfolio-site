import React, { useState }from 'react';
import resume from '../assets/resume.pdf'
import DarkMode from './DarkMode';
import { Link, animateScroll as scroll } from "react-scroll";
import { ReactComponent as Pin } from '../assets/pin.svg'
import "react-toggle/style.css" 

function Nav(props) {

    function scrollToProjects(){
        scroll.scrollTo(300);
    }

    function scrollToAbout(){
        scroll.scrollTo(1300);
    }
    return (
        <div>
            <DarkMode />

        </div>
    );
}

export default Nav;