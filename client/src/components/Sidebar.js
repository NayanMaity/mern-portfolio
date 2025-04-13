import React from "react";

const Sidebar = () => {
    return (
        <div id="side-intro" className="wow animated fadeInLeft">
            <div id="name-logo">
                <h3>Nayan Maity</h3>
                {/* <p>Full Stack Developer</p> */}
            </div>

            <div id="profile-img">
                <img src="/images/me2.jpg" alt="Nayan Maity" />
            </div>

            <div id="side-info">
                <h5>
                    <a href="mailto:nayanmaity369@gmail.com">nayanmaity369@gmail.com</a>
                </h5>
                <h5>West Bengal, India</h5>
            </div>

            <p className="copy">© 2024 Nayan Maity. All rights reserved.</p>

            <div id="side-social" className="d-flex justify-content-center gap-3">
                <div id="side-social-box">
                    <a href="https://www.instagram.com/lightning_n.a.y.a.n_/" target="_blank" rel="noopener noreferrer">
                        <i className="lab la-instagram"></i>
                    </a>
                </div>
                <div id="side-social-box">
                    <a href="https://www.facebook.com/nayan.maity.566" target="_blank" rel="noopener noreferrer">
                        <i className="lab la-facebook-f"></i>
                    </a>
                </div>
                <div id="side-social-box">
                    <a href="https://twitter.com/CaptainMarss" target="_blank" rel="noopener noreferrer">
                        <i className="lab la-twitter"></i>
                    </a>
                </div>
            </div>

            <div id="hire-btn">
                <a href="#contact" className="d-flex justify-content-center align-items-center">
                    <i className="las la-envelope"></i>
                    <span>Hire Me</span>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
