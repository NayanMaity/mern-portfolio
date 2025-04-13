import React from "react";

const Services = () => {
    return (
        <section id="services" className="section">
            <div className="main-subtitle"><i className="las la-stream"></i><span>SERVICES</span></div>
            <div className="section-heading"><h5 className="text-start">My <span className="high-light">Specializations</span></h5></div>
            {[
                ["Website Design", "I create digital products with unique ideas using Figma", "las la-bezier-curve"],
                ["Frontend Development", "I build websites and take them live with WordPress or React", "las la-code"],
                ["Backend Development", "I develop backend for websites using PHP, MySQL and Laravel", "las la-sitemap"]
            ].map(([title, text, icon], idx) => (
                <div className="service-box wow animated fadeInUp d-flex flex-column" key={idx}>
                    <h3 className="d-flex justify-content-between">{title}<i className={icon}></i></h3>
                    <p className="text-start">{text}</p>
                    <span className="text-start">10 PROJECTS</span>
                </div>
            ))}
        </section>
    );
};

export default Services;
