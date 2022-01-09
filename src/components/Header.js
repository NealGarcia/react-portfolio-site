import React, { useState }from 'react';
import resume from '../assets/resume.pdf'
import Toggle from "react-toggle";
import DarkMode from './DarkMode';
import "react-toggle/style.css" 


function Header(props) {
    const [isDark, setIsDark] = useState(true);

    return (
        <div>
            <DarkMode />
            <div className = "titleWrapper">
                {/* <h2 className = "name">Neal Garcia</h2> */}
                <h1 className = "titleHeader">
                    I'm Neal Garcia, a software engineer + web developer <span>currently</span> living in <span>Dallas, Texas.</span>
                </h1>
                <ul className = "nav">
                    <li>Projects</li>
                    <li>About</li>
                    <li><a href = "https://www.linkedin.com/in/nealgarcia">LinkedIn</a></li>
                    <li><a href = "https://github.com/NealGarcia">Github</a></li>
                    <li><a href={resume} target='_blank' rel='noopener noreferrer'>Resume</a></li>
                    <li><a href = "mailto: nathnlgarcia@gmail.com">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;