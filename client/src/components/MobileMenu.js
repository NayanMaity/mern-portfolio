import React, { useState } from "react";

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMobileNav = () => {
        setMenuOpen(!menuOpen);
    };

    const closeNav = () => {
        setMenuOpen(false);
    };

    return (
        <>
            {/* Toggle Button */}
            <div id="nav-toggle-btn" onClick={toggleMobileNav}>
                <i className="las la-bars"></i>
            </div>

            {/* Overlay */}
            <div
                id="mobile-nav-overlay"
                style={{ display: menuOpen ? "block" : "none" }}
                onClick={closeNav}
            />

            {/* Mobile Nav Panel */}
            <div
                id="mobile-nav"
                style={{ right: menuOpen ? "0" : "-100%" }}
            >
                <div className="d-flex justify-content-end mb-4">
                    <div id="nav-close-btn" onClick={closeNav}>
                        <i className="las la-times"></i>
                    </div>
                </div>

                <ul className="d-flex flex-column gap-3">
                    <p>Navigate</p>
                    {[
                        ["home", "Home", "las la-home"],
                        ["about", "About", "lar la-user"],
                        ["services", "Services", "las la-stream"],
                        ["skill", "Skills", "las la-shapes"],
                        ["resume", "Resume", "las la-briefcase"],
                        ["portfolio", "Portfolio", "las la-grip-vertical"],
                        ["contact", "Contact", "las la-envelope"]
                    ].map(([id, label, icon]) => (
                        <li key={id} onClick={closeNav}>
                            <a href={`#${id}`}>
                                <i className={icon}></i> {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div id="mobile-menu-social" className="mt-5">
                    <p>Social</p>
                    <div id="mobile-menu-social-i" className="d-flex gap-3">
                        <a href="https://www.instagram.com/lightning_n.a.y.a.n_/" target="_blank" rel="noopener noreferrer">
                            <i className="lab la-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/nayan.maity.566" target="_blank" rel="noopener noreferrer">
                            <i className="lab la-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com/CaptainMarss" target="_blank" rel="noopener noreferrer">
                            <i className="lab la-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
