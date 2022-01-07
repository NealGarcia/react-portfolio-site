import React from 'react';

function Header(props) {
    return (
        <div>
            <div className = "titleWrapper">
                <h1 className = "titleHeader">
                    Hi 👋  I'm <span>Neal</span> - a software engineer & web developer based in <span>Dallas, Texas.</span>
                </h1>
            </div>
            <ul className = "nav">
                <li>Projects</li>
                <li>Resume</li>
                <li>LinkedIn</li>
                <li>Github</li>
                <li>Contact Me</li>
            </ul>
        </div>
    );
}

export default Header;