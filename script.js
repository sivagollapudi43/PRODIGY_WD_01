document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    let sectionColors = {};
    let usedColors = new Set();

    function getUniqueColor() {
        let color;
        do {
            color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        } while (usedColors.has(color));
        usedColors.add(color);
        return color;
    }

    function updateNavbarColor() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                if (!sectionColors[section.id]) {
                    sectionColors[section.id] = getUniqueColor();
                }
                navbar.style.background = sectionColors[section.id];
            }
        });
    }

    window.addEventListener("scroll", updateNavbarColor);

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = getUniqueColor();
        });

        link.addEventListener("mouseout", function () {
            this.style.color = "#fff";
        });
    });

    updateNavbarColor();
});
