document.addEventListener("DOMContentLoaded", () => {
    console.log("Velkommen til HUB Phønix!");

    // === Smooth Scrolling for Navigation ===
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // === Active Section Highlighting ===
    const sections = document.querySelectorAll("main section");
    const navItems = document.querySelectorAll("nav ul li a");

    function setActiveNavItem() {
        let index = sections.length;
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        navItems.forEach(link => link.classList.remove("active"));
        navItems[index].classList.add("active");
    }

    window.addEventListener("scroll", setActiveNavItem);
    setActiveNavItem(); // Initialize on load

    // === Responsive Mobile Navigation Toggle ===
    const nav = document.querySelector("nav ul");
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "☰";
    toggleButton.style.background = "none";
    toggleButton.style.border = "none";
    toggleButton.style.color = "white";
    toggleButton.style.fontSize = "1.8rem";
    toggleButton.style.cursor = "pointer";
    toggleButton.style.margin = "0 1rem";

    document.querySelector("nav").prepend(toggleButton);

    toggleButton.addEventListener("click", () => {
        nav.classList.toggle("visible");
    });

    // Hide menu when clicking on a link (mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (nav.classList.contains("visible")) {
                nav.classList.remove("visible");
            }
        });
    });

    // === Popup Contact Info Button ===
    const contactSection = document.getElementById("contact");
    const contactButton = document.createElement("button");
    contactButton.textContent = "Vis kontaktinformasjon";
    contactButton.style.display = "block";
    contactButton.style.margin = "1rem auto";
    contactButton.style.padding = "0.7rem 1.5rem";
    contactButton.style.fontSize = "1rem";
    contactButton.style.backgroundColor = "#0066cc";
    contactButton.style.color = "white";
    contactButton.style.border = "none";
    contactButton.style.cursor = "pointer";
    contactButton.style.transition = "0.3s";
    contactButton.style.borderRadius = "5px";

    contactSection.appendChild(contactButton);

    contactButton.addEventListener("click", () => {
        alert("Kontakt oss på: post@aofostfold.no\nAdresse: Phønixbrygga 3, Fredrikstad");
    });

    // === Lightbox Effect for Images ===
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => openLightbox(img.src));
    });

    function openLightbox(src) {
        const lightbox = document.createElement("div");
        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";
        lightbox.style.background = "rgba(0,0,0,0.8)";
        lightbox.style.display = "flex";
        lightbox.style.alignItems = "center";
        lightbox.style.justifyContent = "center";
        lightbox.style.zIndex = "1000";
    
        const img = document.createElement("img");
        img.src = src;
        img.style.maxWidth = "90vw"; // Ensure it doesn't exceed viewport width
        img.style.maxHeight = "90vh"; // Ensure it doesn't exceed viewport height
        img.style.borderRadius = "10px";
        img.style.objectFit = "contain"; // Ensures image is scaled correctly
    
        lightbox.appendChild(img);
        document.body.appendChild(lightbox);
    
        lightbox.addEventListener("click", () => {
            document.body.removeChild(lightbox);
        });
    }
    

    // === Scroll Animation (Fade-in Sections) ===
    const fadeSections = document.querySelectorAll("section");

    function fadeInOnScroll() {
        fadeSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    fadeSections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger on load

});
