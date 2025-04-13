import React from "react";

const Projects = ({ data }) => {
    return (
        <section id="portfolio" className="section">
            <div className="main-subtitle wow animated fadeInUp" data-wow-delay=".1s">
                <i className="las la-grip-vertical"></i>
                <span>PORTFOLIO</span>
            </div>

            <div className="section-heading wow animated fadeInUp" data-wow-delay=".3s">
                <h5>Featured <span className="high-light">Projects</span></h5>
            </div>

            <div id="featured-projects" className="d-flex flex-column wow animated fadeInUp" data-wow-delay=".3s">
                <div className="row g-4">
                    {data.map((project, index) => (
                        <div className="col-sm-6" key={index}>
                            <div className="project-box">
                                <div className="project-img">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <img src={project.img} alt={project.title} className="img-fluid" />
                                    </a>
                                </div>
                                <div className="project-tech d-flex align-items-center">
                                    {project.tech.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                                <h4 className="project-title">{project.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
