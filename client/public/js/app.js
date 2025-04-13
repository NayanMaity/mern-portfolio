document.addEventListener("DOMContentLoaded", function () {
    // Side Menu Tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Auto Type
    const typeTarget = document.querySelector("#auto-type");
    if (typeTarget) {
        new Typed("#auto-type", {
            strings: ["Developer.", "Professional Coder."],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        });
    }

    // WOW.js Init
    if (typeof WOW === "function") {
        new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: true,
            live: true,
            scrollContainer: null,
            resetAnimation: true,
        }).init();
    }

    // Mobile Nav
    const menuToggleBtn = document.querySelector("#nav-toggle-btn");
    const menuCloseBtn = document.querySelector("#nav-close-btn");
    const mobileNavOverlay = document.querySelector("#mobile-nav-overlay");
    const mobileNav = document.querySelector("#mobile-nav");

    if (menuToggleBtn && mobileNavOverlay && mobileNav) {
        menuToggleBtn.addEventListener("click", () => {
            mobileNavOverlay.style.display = "block";
            mobileNav.style.right = "0%";
        });
    }

    if (menuCloseBtn && mobileNavOverlay && mobileNav) {
        menuCloseBtn.addEventListener("click", () => {
            mobileNavOverlay.style.display = "none";
            mobileNav.style.right = "-100%";
        });
    }

    // Sections for Intersection Observer
    const sections = {
        home: "side-nav-home",
        about: "side-nav-about",
        skill: "side-nav-skill",
        resume: "side-nav-resume",
        services: "side-nav-services",
        portfolio: "side-nav-portfolio",
        contact: "side-nav-contact",
    };

    Object.entries(sections).forEach(([id, className]) => {
        const section = document.getElementById(id);
        if (section) {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        document.querySelectorAll(".side-nav-box a i").forEach((el) => el.classList.remove("side-nav-active"));
                        document.querySelectorAll("#mobile-menu ul li a").forEach((el) => el.classList.remove("mobile-nav-active"));

                        document.querySelector(`.${className}`)?.classList.add("side-nav-active");
                        document.querySelector(`.mobile-nav-${id}`)?.classList.add("mobile-nav-active");
                    }
                },
                { threshold: id === "portfolio" ? 0.3 : id === "resume" || id === "services" ? 0.5 : 1 }
            );

            observer.observe(section);
        }
    });

    // Portfolio Section Show More
    const portHideSec1 = document.querySelectorAll(".protfolio-hide-sec-1");
    const portHideSec2 = document.querySelectorAll(".protfolio-hide-sec-2");
    const showBtn1 = document.getElementById("protfolio-show-btn-1");
    const showBtn2 = document.getElementById("protfolio-show-btn-2");

    showBtn1?.addEventListener("click", (e) => {
        portHideSec1.forEach((sec) => (sec.style.display = "flex"));
        e.target.style.display = "none";
    });

    showBtn2?.addEventListener("click", (e) => {
        portHideSec2.forEach((sec) => (sec.style.display = "flex"));
        e.target.style.display = "none";
    });

    // To Top Button
    const toTopBtn = document.getElementById("to-top");
    if (toTopBtn) {
        toTopBtn.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });

        window.addEventListener("scroll", () => {
            toTopBtn.style.display = document.documentElement.scrollTop < 150 ? "none" : "flex";
        });
    }
});
