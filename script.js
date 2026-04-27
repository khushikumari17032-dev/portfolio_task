// DARK MODE
const toggle = document.getElementById("theme-toggle");
toggle.onclick = () => {
  document.body.classList.toggle("light-mode");
  toggle.textContent =
    document.body.classList.contains("light-mode") ? "☀️" : "🌙";
};

// ACTIVE NAV
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (scrollY >= top) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
document.querySelectorAll(".fade").forEach(el => observer.observe(el));

// SMOOTH SCROLL
document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const href = this.getAttribute("href");

    // Only prevent default for internal page anchors
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    }
  });
});
// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});