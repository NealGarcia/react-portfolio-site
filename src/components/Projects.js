import React from 'react';
import screen2 from '../assets/artgallery.png'
import screen1 from '../assets/spaceman.png'
import screen3 from '../assets/employeefinder.png'
import screen4 from '../assets/traveltrackr.png'
const projects = [
    {
        id: 1,
        name: "traveltrackr",
        description:"A full-stack application where users can create, update, view, and delete records and entries of their travels.",
        tags: "Front-End, Back-End, Django, Python, PostgresQL, ReactJS, CSS",
        img: screen4,
        repo: "https://github.com/NealGarcia/travel-tracker-frontend",
        site: "https://traveltrackr.herokuapp.com/",
    },
    {
        id: 2,
        name: "React Art Gallery",
        description:"Front-end web application that utilizes third-party data from the Art Institute of Chicago API to allow users to browse their collections.",
        tags: "ReactJS, CSS, API, Front-End",
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
        description:"Full-stack MERN application developed with a team of two other developers where we followed an Agile/Scrum workflow.",
        tags: "Front-End, Back-End, Express, ReactJS, CSS, Mongoose, MongoDB",
        img: screen3,
        repo: "https://github.com/NealGarcia/Project-3-Front-End",
        site: "https://emergency-employee-finder.herokuapp.com/",
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
                                <p><a href = {project.repo} target="_blank" rel="noreferrer">Source Code</a> →</p>
                                <p><a href = {project.site} target="_blank" rel="noreferrer">Live Project </a>→</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Projects;