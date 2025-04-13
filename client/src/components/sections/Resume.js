import React, { useEffect } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Resume = () => {
    useEffect(() => { }, []);

    return (
        <section id="resume" className="section d-flex flex-column">
            <div className="main-subtitle"><i className="las la-briefcase"></i><span>RESUME</span></div>
            <div className="section-heading"><h5 className="text-start">Education & <span className="high-light">Experience</span></h5></div>

            <div id="resume-pills">
                <ul className="nav nav-pills my-nav-pills gy-4 wow animated fadeInRight" data-wow-delay=".5s"
                    role="tablist">
                    <li className="nav-item my-nav-item">
                        <a href="#my-education" className="nav-link active my-nav-link"
                            data-bs-toggle="pill">Education</a>
                    </li>

                    <li className="nav-item ">
                        <a href="#my-experience" className="nav-link my-nav-link" data-bs-toggle="pill">Technical
                            Proficiency</a>
                    </li>
                </ul>

                <div className="tab-content ">
                    <div id="my-education" className="container tab-pane active ">
                        <div className="resume-area d-flex flex-column wow animated fadeIn" data-wow-delay=".7s">
                            <div className="resume-box wow animated fadeInUp" data-wow-delay=".6s">
                                <h5 className="text-start">2018 - 2020</h5>
                                <h3 className="text-start">High School Degree</h3>
                                <p className="text-start">Sagarpur Sir Ashutosh High School</p>
                            </div>

                            <div className="resume-box wow animated fadeInUp" data-wow-delay=".8s">
                                <h5 className="text-start">2020 - 2023</h5>
                                <h3 className="text-start">Bachelor's Degree</h3>
                                <p className="text-start">B.Sc Computer Science (H) </p>
                                <p className="text-start">Panskura Banamali College</p>
                            </div>

                            <div className="resume-box wow animated fadeInUp" data-wow-delay="1s">
                                <h5 className="text-start">2023 - 2024</h5>
                                <h3 className="text-start">PHP Professional Degree</h3>
                                <p className="text-start">Certificate Course in W3Web School </p>
                                <p className="text-start"> (Dumdum, Kolkata)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="my-experience" className="container tab-pane fade">
                        <div className="resume-area d-flex flex-column ">
                            <div className="resume-box">
                                <h3 className="text-start">Frontend</h3>
                                <p className="text-start">HTML5, CSS3, SCSS, JavaScript, Responsive Design,
                                    Bootstrap - 3,4,5, WordPress
                                </p>
                            </div>

                            <div className="resume-box">
                                <h3 className="text-start">Backend</h3>
                                <p className="text-start">PHP, Laravel</p>
                            </div>

                            <div className="resume-box">
                                <h3 className="text-start">Database</h3>
                                <p className="text-start">MySQL</p>
                            </div>

                            <div className="resume-box">
                                <h3 className="text-start">Tools & Version Control</h3>
                                <p className="text-start">Git, GitHub, Visual Studio Code</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="/Nayan_Maity_CV.pdf" download="Nayan_Maity_CV.pdf" id="resume-download">See My Resume</a>
        </section>
    );
};

export default Resume;
