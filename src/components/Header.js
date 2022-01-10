import React, { useState }from 'react';
import resume from '../assets/resume.pdf'
import DarkMode from './DarkMode';
import { Link, animateScroll as scroll } from "react-scroll";
import "react-toggle/style.css" 

function Header(props) {

    function scrollToProjects(){
        scroll.scrollTo(300);
    }

    function scrollToAbout(){
        scroll.scrollToBottom({behavior:"smooth"});
    }
    return (
        <div>
            <DarkMode />
            <div className = "titleWrapper">
                <h1 className = "titleHeader">
                    I'm Neal Garcia, a software engineer + front-end developer <span>currently</span> living in <span>Dallas, Texas.</span>
                </h1>
                <ul className = "nav">
                    <li onClick = {scrollToProjects}><button>Projects</button></li>
                    <li onClick = {scrollToAbout}><button>About</button>
                    </li>
                    <li><a href = "https://www.linkedin.com/in/nealgarcia" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href = "https://github.com/NealGarcia" target="_blank" rel="noreferrer">Github</a></li>
                    <li><a href={resume} target='_blank' rel='noopener noreferrer'>Resume</a></li>
                    <li><a href = "mailto: nathnlgarcia@gmail.com" >Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;