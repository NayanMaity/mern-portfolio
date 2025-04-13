import React from "react";


const Home = () => {
    return (
        <section id="home" className="section wow animated fadeInUp">
            <div className="main-subtitle">
                <i className="las la-home"></i>
                <span>INTRODUCE</span>
            </div>
            <div id="home-heading">
                <h1 className="text-start">Say Hi from <span className="high-light">Nayan</span>,</h1>
                <h5 className="text-start">I am a <span className="high-light"><span id="auto-type"></span></span></h5>
            </div>
            <p className="text-start">I design and code beautifully simple things and I love what I do. Just simple like that!</p>
            <div className="h-btn d-flex align-items-center justify-content-between">
                <a href="#contact" className="h-to-c-btn">Contact Me</a>
                <a href="#portfolio" className="h-to-p-btn">
                    <img src="/images/round-text.png" alt="round-text" />
                    <i className="las la-arrow-down"></i>
                </a>
            </div>
        </section>
    );
};

export default Home;
