import React from 'react';
import screen2 from '../assets/art-gallery-screen.png'
import screen1 from '../assets/spaceman-screen.png'

const projects = [
    {
        id: 1,
        name: "SPACEMAN",
        description:"An outer-space themed browser game made with HTML, CSS, and vanilla JavaScript, where I explored DOM Manipulation methods.",
        tags: "JavaScript, HTML, CSS, Front End Development, Web Design",
        img: screen1,
        repo: "https://pages.git.generalassemb.ly/nealgarcia/spaceman/",
        site: "https://github.com/NealGarcia/Spaceman"
    },
    {
        id: 2,
        name: "React Art Gallery",
        description:"A front-end web application that utilizes third-party data from the Art Institute of Chicago API to allow users to search, view, and learn more about artworks in their collections.",
        tags: "Front End Development, Web Design, ReactJS, API",
        img: screen2,
        repo: "https://github.com/NealGarcia/Art-Gallery",
        site: "https://proj-2-react-art-gallery.herokuapp.com/",
    }
]

function Projects(props) {
    return (
        <div className = "projectsContainer">
            {projects.map(project => (
                <div key = {project.id} className = "projectCard">
                    <img src = {project.img} alt = "Project" />
                    <div className = "projectTextWrapper">
                        <h2 className = "projectTitle">{project.name}</h2>
                        <p className = "projectTags">{project.tags}</p>
                        <p className = "projectDescription">{project.description}</p>
                        <div className = "projectLinks">
                            <p><a href = {project.repo} target="_blank" rel="noreferrer">View Source Code</a> →</p>
                            <p><a href = {project.site} target="_blank" rel="noreferrer">View Live Project </a>→</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default Projects;