import React from 'react';
import screen1 from '../assets/art-gallery-screen.png'
import screen2 from '../assets/spaceman-screen.png'

const projects = [
    {
        id: 1,
        name: "SPACEMAN",
        description:"An outer-space themed browser game made with HTML, CSS, and vanilla JavaScript, where I explored DOM Manipulation methods.",
        tags: "JavaScript, HTML, CSS, Front End Development, Web Design",
        img: screen1,
    },
    {
        id: 2,
        name: "React Art Gallery",
        description:"A front-end web application that utilizes third-party data from the Art Institute of Chicago API to allow users to search, view, and learn more about artworks in their collections.",
        tags: "Front End Development, Web Design, ReactJS, API",
        img: screen2,
    }
]


function Projects(props) {
    return (
        <div className = "projects">
            {projects.map(project => (
                <div key = {project.id} className = "projectCard">
                    <h2>{project.name}</h2>
                    <img src = {project.img} alt = "Project Image" />
                    {console.log(project.img)}
                    <p className = "tags">{project.tags}</p>
                    <p className = "description">{project.description}</p>
                    {console.log(project.img_src)}
                </div>
            ))}

        </div>
    );
}

export default Projects;