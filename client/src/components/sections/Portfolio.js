import React from "react";

const Portfolio = ({ data = [] }) => {
    return (
        <section id="portfolio" className="section">
            <div className="main-subtitle">
                <i className="las la-grip-vertical"></i>
                <span>PORTFOLIO</span>
            </div>

            <div className="section-heading">
                <h5>
                    Featured <span className="high-light">Projects</span>
                </h5>
            </div>

            <div id="featured-projects" className="row g-4">
                {data.length > 0 ? (
                    data.map((project, i) => (
                        <div className="col-sm-6" key={i}>
                            <div className="project-box">
                                <div className="project-img">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={project.img}
                                            alt={project.title || "Project image"}
                                            className="img-fluid"
                                        />
                                    </a>
                                </div>

                                <div className="project-tech d-flex text-start">
                                    {project.tech.map((tech, j) => (
                                        <span key={j}>{tech}</span>
                                    ))}
                                </div>

                                <h4 className="project-title text-start">
                                    {project.title}
                                </h4>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No projects to display.</p>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
