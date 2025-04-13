import React from "react";

const Navbar = () => {
    return (
        <div id="side-navbar" className="d-flex flex-column align-items-center wow animated fadeInRight">
            <div className="side-nav-box">
                <a href="#home" className="side-nav-home">
                    <i className="las la-home"></i>
                    <span>Home</span>
                </a>
            </div>
            <div className="side-nav-box">
                <a href="#about" className="side-nav-about">
                    <i className="lar la-user"></i>
                    <span>About</span>
                </a>
            </div>
            <div className="side-nav-box">
                <a href="#services" className="side-nav-services">
                    <i className="las la-stream"></i>
                    <span>Services</span>
                </a>
            </div>
            <div className="side-nav-box">
                <a href="#skill" className="side-nav-skill">
                    <i className="las la-shapes"></i>
                    <span>Skills</span>
                </a>
            </div>
            <div className="side-nav-box">
                <a href="#resume" className="side-nav-resume">
                    <i className="las la-briefcase"></i>
                    <span>Resume</span>
                </a>
            </div>
            <div className="side-nav-box">
                <a href="#portfolio" className="side-nav-portfolio">
                    <i className="las la-grip-vertical"></i>
                    <span>Portfolio</span>
                </a>
            </div>
            <div className="side-nav-box">
                <a href="#contact" className="side-nav-contact">
                    <i className="las la-envelope"></i>
                    <span>Contact</span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
