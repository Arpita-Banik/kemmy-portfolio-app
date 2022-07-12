import React, { useEffect, useState } from 'react';
import image from '../../image/bg.jpg';
import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
    return (
        <>
        <div className="project-bg" id='projects' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000" >
            <div className="container portfolio">
                <div className="d-flex pt-5">
                    <h5 className="pe-3 text-white">Projects</h5> <hr className="hr" />
                </div>
                <div className="row g-0 py-md-3 py-3 m-0 d-flex align-items-center justify-content-center">
                    {
                        projects.map(project => <Project
                            key={project.id}
                            project={project}>
                        </Project>)
                    }
                </div>
            </div>
        </div>
        
        </>
    )
};

export default Projects;