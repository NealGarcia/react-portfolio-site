import React from 'react';

function Header(props) {
    return (
        <div>
            <div className = "titleWrapper">
                <h2 className = "name">Neal Garcia</h2>
                <h1 className = "titleHeader">
                    I'm a software engineer + web developer <span>currently</span> living in <span>Dallas, Texas.</span>
                </h1>
                <ul className = "nav">
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>LinkedIn</li>
                    <li>Github</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;