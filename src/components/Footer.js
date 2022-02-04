import React from 'react';
import { ReactComponent as GithubIcon } from '../assets/SVGs/github.svg'
import { ReactComponent as IgIcon } from '../assets/SVGs/ig.svg'
import { ReactComponent as LinkedinIcon } from '../assets/SVGs/linkedin.svg'
import { ReactComponent as Pin } from '../assets/pin.svg'




function Footer(props) {
    return (
        <div className = "footer">
            <div className = "socialIcons">
            <a href = "https://github.com/NealGarcia" target="_blank" rel="noreferrer"><GithubIcon className = "icon" /></a>
            <a href = "https://www.linkedin.com/in/nealgarcia" target="_blank" rel="noreferrer"><LinkedinIcon className = "icon"/></a>
            <a href="https://www.instagram.com/neal.garcia/"><IgIcon className = "icon"/></a>
            </div>
            Neal Garcia ©2022
        </div>
    );
}

export default Footer;