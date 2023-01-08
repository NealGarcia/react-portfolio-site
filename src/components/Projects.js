import React from 'react';
//styles
import "../styles/projects.css" 

// screenshots
import screen2 from '../assets/artgallery.png'
import screen1 from '../assets/spaceman.png'
import screen3 from '../assets/employeefinder.png'
import screen4 from '../assets/travlr.png'
import screen5 from '../assets/portfolio.png'
import screen6 from '../assets/nba-teams.png'

const projects = [
    {
        id: 1,
        name: "travlr",
        description:"A full-stack application where users can create, update, view, and delete records and entries of their travels.",
        tags: "Front-End, Back-End, Django, Python, PostgresQL, ReactJS, React Router, CSS",
        img: screen4,
        repo: "https://github.com/NealGarcia/travel-tracker-frontend",
        site: "https://traveltrackr.herokuapp.com/",
    },
    {
        id: 2,
        name: "React Art Gallery",
        description:"Front-end web application that utilizes third-party data from the Art Institute of Chicago API to allow users to search and browse their collections.",
        tags: "ReactJS, CSS, API, Front-End, React Router",
        img: screen2,
        repo: "https://github.com/NealGarcia/Art-Gallery",
        site: "https://proj-2-react-art-gallery.herokuapp.com/",
    },
    {
        
        id: 3,
        name: "SPACEMAN",
        description:"An outer-space themed browser game made with HTML, CSS, and vanilla JavaScript, where I explored DOM Manipulation and array methods.",
        tags: "JavaScript, HTML, CSS, Front-End",
        img: screen1,
        repo: "https://github.com/NealGarcia/Spaceman",
        site: "https://pages.git.generalassemb.ly/nealgarcia/spaceman/"
    },
    {
        id: 4,
        name: "Employee Finder",
        description:"Full-stack MERN application with full CRUD functionaliy. Developed with a team of two other developers where we followed an Agile/Scrum workflow.",
        tags: "Front-End, Back-End, Express, ReactJS, CSS, Mongoose, MongoDB",
        img: screen3,
        repo: "https://github.com/NealGarcia/Project-3-Front-End",
        site: "https://emergency-employee-finder.herokuapp.com/",
    },
    {
        id: 5,
        name: "NBA Teams",
        description:"A front-end, single-page application built with React, ReactBootstrap, JavaScript, and CSS that utilizes third-party data from balldontlie API. Features include player search, pagination, and page sort functionaltiy.",
        tags: "Front-End, ReactJS, ReactBootstrap, CSS",
        img: screen6,
        repo: "https://github.com/NealGarcia/nba-teams",
        site: "https://www.nealgarcia.com/nba-teams",
    },

    {
        id: 6,
        name: "Portfolio Site",
        description:"Developed this very site to display my personal projects and information about myself. Created from the ground up using React and CSS. Features a dark-mode toggle switch and mobile responsiveness. ",
        tags: "Front-End, ReactJS, CSS",
        img: screen5,
        repo: "https://github.com/NealGarcia/NealGarcia.github.io",
        site: "https://nealgarcia.com/",
    },
    
]

function Projects(props) {
    return (
        <div className = "projects" id="work">
            <div className="project-1">
                <div className="projectCard">
                    <div className="content">
                        <div className="top">
                            <p>MASONRY</p>
                            <p className="right">WEBSITE DEVELOPMENT & MAINTAINENCE</p>
                        </div>       
                        <div className="center">
                            <p className="cardTitle">CHUY'S</p>    
                        </div>               
                        <div className="bottom">
                            <p>CRAFT CMS, HTML, SASS, JAVASCRIPT, VUE</p>
                            <a className="right" href="https://www.chuys.com" target="_blank">VIEW SITE</a>
                        </div> 
                    </div>
                </div>
                <p className="projectDescription">In 2022 the Chuy's website went through a complete overhaul. The new website moved from ExpressionEngine to Craft CMS for client-side content management, as well as a responsive and modern makeover. I worked alongside a Lead Developer on the front-end development using Vue and Sass, and utilized the Twig templating engine to connect the front end to the CMS backend.  </p>
            </div>
        </div>
    );
}

export default Projects;