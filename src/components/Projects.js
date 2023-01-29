import React from 'react';
import "../styles/projects.css" 


const projects = [
    {
        id: 1,
        name: "Chuy's",
        description:"In 2022 the Chuy's website went through a complete overhaul. The new website moved from ExpressionEngine to Craft CMS for client-side content management, as well as a responsive and modern makeover. I worked alongside a Lead Developer on the front-end development using Vue and Sass, utilized the Twig templating engine to connect the front-end to the CMS backend, and provided post-launch support and maintenance.",
        tags: "Masonry",
        caseStudy: "https://builtbymasonry.com/work/chuys",
        site: "https://www.chuys.com",
    },
    {
        id: 2,
        name: "Blue Prism",
        description:"Blue Prism is a global leader in robotic process automation. Originally built by Masonry in 2019, the site is now live in seven languages, has dozens of editors adding content daily, and averages nearly 3,000 users per day. I worked on their homepage redesign, as well as overall site maintenance.",
        tags: "Masonry",
        caseStudy: "https://builtbymasonry.com/work/blue-prism",
        site: "https://www.blueprism.com",
    },
]

function Projects(props) {
    return (
        <div className = "projects" id="work">
            <div className = "projectsContainer">
                {projects.map(project => (
                    <div key = {project.id} className = "projectCard">
                        <div className = "projectTextWrapper">
                            <h2 className = "projectTitle">{project.name}</h2>
                            <p className = "projectTags">{project.tags}</p>
                            <p className = "projectDescription">{project.description}</p>
                            <div className = "projectLinks">
                                <p><a class="small-text" href = {project.caseStudy} target="_blank">CASE STUDY</a>→</p>
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