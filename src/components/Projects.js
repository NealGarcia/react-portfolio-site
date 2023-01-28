import React from 'react';
import screen2 from '../assets/artgallery.png'
import screen1 from '../assets/spaceman.png'
import screen3 from '../assets/employeefinder.png'
import screen4 from '../assets/travlr.png'
import screen5 from '../assets/portfolio.png'
import screen6 from '../assets/nba-teams.png'
import "../styles/projects.css" 


const projects = [
    {
        id: 1,
        name: "Chuy's",
        description:"In 2022 the Chuy's website went through a complete overhaul. The new website moved from ExpressionEngine to Craft CMS for client-side content management, as well as a responsive and modern makeover. I worked alongside a Lead Developer on the front-end development using Vue and Sass, utilized the Twig templating engine to connect the front-end to the CMS backend, and provided post-launch support and maintenance.",
        tags: "Masonry",
        site: "https://www.chuys.com",
    },
    {
        id: 2,
        name: "Blue Prism",
        description:"Blue Prism is a global leader in robotic process automation. Originally built by Masonry in 2019, the site is now live in seven languages, has dozens of editors adding content daily, and averages nearly 3,000 users per day. I worked on their homepage redesign, as well as overall site maintenance.",
        tags: "Masonry",
        site: "https://www.blueprism.com",
    },
    {
        id: 3,
        name: "React Art Gallery",
        description:"A front-end, single-page application built with React, ReactBootstrap, JavaScript, and CSS that utilizes third-party data from balldontlie API. Features include player search, pagination, and page sort functionaltiy.",
        tags: "Personal Project",
        site: "https://www.nealgarcia.com/nba-teams",
    },

    {
        id: 4,
        name: "React Art Gallery",
        description:"A personal project built in React, React Art Gallery is a Front-end web application that utilizes third-party data from the Art Institute of Chicago API to allow users to search and browse their collections.",
        tags: "Personal Project",
        site: "https://nealgarcia.com/",
    },
    
]

function Projects(props) {
    return (
        <div className = "projects">
            <div className = "projectsContainer">
                {projects.map(project => (
                    <div key = {project.id} className = "projectCard">
                        <a href = {project.site} target="_blank" rel="noreferrer" className = "imglink"><img src = {project.img} alt = "Project" /></a>
                        <div className = "projectTextWrapper">
                            <h2 className = "projectTitle">{project.name}</h2>
                            <p className = "projectTags">{project.tags}</p>
                            <p className = "projectDescription">{project.description}</p>
                            <div className = "projectLinks">
                                <p><a class="small-text" href = {project.site} target="_blank" rel="noreferrer">CHECK IT OUT</a>→</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Projects;