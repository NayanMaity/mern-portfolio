import { useEffect } from 'react';

const useScrollSpy = () => {
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll("#side-navbar a");

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(link => link.classList.remove("side-nav-active"));
                        const id = entry.target.getAttribute("id");
                        const activeLink = document.querySelector(`.side-nav-${id}`);
                        if (activeLink) activeLink.classList.add("side-nav-active");
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        sections.forEach(section => observer.observe(section));
        return () => sections.forEach(section => observer.unobserve(section));
    }, []);
};

export default useScrollSpy;
