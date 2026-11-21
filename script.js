
// Menampilkan pesan ketika website dibuka

console.log("Welcome to My Portfolio!");

// SCROLL ANIMATION
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

