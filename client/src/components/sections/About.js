import React from "react";

const About = ({ data }) => {
    return (
        <section id="about" className="section">
            <div className="main-subtitle wow animated fadeInUp"><i className="lar la-user"></i><span>ABOUT</span></div>
            <div className="section-heading wow animated fadeInUp">
                <h5 className="text-start">Every great design begins with an even <span className="high-light">better story</span></h5>
            </div>
            <p className="wow animated fadeInUp text-start">
                {data.description || `Hello, I'm Nayan Maity, and I work as a full-stack developer...`}
            </p>
        </section>
    );
};

export default About;
