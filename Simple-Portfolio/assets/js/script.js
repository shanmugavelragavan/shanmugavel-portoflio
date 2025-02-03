// Back to Top Button Functionality
const backToTopButton = document.querySelector(".back");

const handleScroll = () => {
  backToTopButton.classList.toggle("up", window.scrollY > 300);
};

const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", handleScroll);
backToTopButton.addEventListener("click", scrollToTop);

// Dark Mode Toggle
const themeToggle = document.querySelector(".theme");
const moonIcon = document.getElementById("moon");
const sunIcon = document.querySelector(".uil-sun");
const body = document.body;

const toggleDarkMode = () => {
  const isDarkMode = body.classList.toggle("dark");
  moonIcon.classList.toggle("active", !isDarkMode);
  sunIcon.classList.toggle("active", isDarkMode);
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
};

// Dark mode based on localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  moonIcon.classList.remove("active");
  sunIcon.classList.add("active");
}

themeToggle.addEventListener("click", toggleDarkMode);

// Hamburger Menu Toggle
const menuBtn = document.getElementById("menu");
const navList = document.querySelector(".navlist");

const toggleMenu = () => {
  menuBtn.classList.toggle("active");
  navList.classList.toggle("active");
};

// Close menu when a navigation link is clicked
const navLinks = document.querySelectorAll(".navlist a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navList.classList.remove("active");
  });
});

menuBtn.addEventListener("click", toggleMenu);

// Portfolio Filtering
const filterButtons = document.querySelectorAll(".filter-btn-1");
const projects = document.querySelectorAll(".pro-box");

const filterProjects = (category) => {
  projects.forEach((project) => {
    const projectCategory = project.getAttribute("data-category");
    if (category === "all" || projectCategory === category) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
};

const handleFilterClick = (e) => {
  const category = e.target.getAttribute("data-filter");
  filterButtons.forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
  filterProjects(category);
};

filterButtons.forEach((button) => {
  button.addEventListener("click", handleFilterClick);
});

// Portfolio with "All" filter
document.addEventListener("DOMContentLoaded", () => {
  filterProjects("all");
});
