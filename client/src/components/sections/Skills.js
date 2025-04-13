import React, { useEffect } from "react";
import { Tooltip } from "bootstrap";

const Skills = () => {
    useEffect(() => {
        const tooltips = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltips.forEach(el => new Tooltip(el));
    }, []);

    return (
        <section id="skill" className="section">
            <div className="main-subtitle wow animated fadeInUp" data-wow-delay=".1s">
                <i className="las la-shapes"></i>
                <span>MY SKILLS</span>
            </div>

            <div className="section-heading wow animated fadeInUp" data-wow-delay=".3s">
                <h5 className="text-start">My <span className="high-light">Advantages</span></h5>
            </div>

            <div id="my-skills-info" className="d-flex flex-wrap">
                <i className="fa-brands fa-html5 wow animated fadeInRight" data-wow-delay=".4s" style={{ color: "#e5532d" }} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip-html" title="HTML"></i>
                <i className="fa-brands fa-css3 wow animated fadeInRight" data-wow-delay=".5s" style={{ color: "#298ec9" }} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip-css" title="CSS"></i>
                <i className="fa-brands fa-js wow animated fadeInRight" data-wow-delay=".6s" style={{ color: "#f7e025" }} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip-js" title="JAVASCRIPT"></i>
                <i className="fa-brands fa-figma wow animated fadeInRight" data-wow-delay=".7s" style={{ color: "#a55eff" }} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip-figma" title="FIGMA"></i>
                <i className="fa-brands fa-wordpress wow animated fadeInRight" data-wow-delay=".8s" style={{ color: "#28799e" }} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip-wp" title="WORDPRESS"></i>
                <i className="fa-brands fa-php wow animated fadeInRight" data-wow-delay=".9s" style={{ color: "#8d96c0" }} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip-php" title="PHP"></i>
                <img width="30" height="30" src="https://img.icons8.com/fluency/30/mysql-logo.png" alt="mysql-logo" className="wow animated fadeInRight" data-wow-delay="1s" style={{ color: "#255278" }} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip-php" title="MySQL" />
                <i className="fa-brands fa-laravel wow animated fadeInRight" data-wow-delay="1.1s" style={{ color: "#d63a3a" }} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip-laravel" title="LARAVEL"></i>
                <i className="fa-brands fa-react wow animated fadeInRight" data-wow-delay="1.2s" style={{ color: "#5ecbf1" }} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip-react" title="REACT"></i>
            </div>
        </section>
    );
};

export default Skills;
