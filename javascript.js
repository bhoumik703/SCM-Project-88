// Check for and apply saved dark mode setting on page load
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}

// Dark Mode Toggle with persistence
document.getElementById("toggleDarkMode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  // Save state to localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // If mobile navigation is active, close it
    const nav = document.querySelector("nav");
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    }
    
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Hamburger Menu Toggle for mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// Modal functionality for project details
document.querySelectorAll(".viewDetails").forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("modal").style.display = "block";
  });
});

// Close modal when clicking on the close button
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Close modal on pressing ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.getElementById("modal").style.display = "none";
  }
});

// Contact form submission handling
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});

// Back-to-top button functionality
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 400) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
  
  revealElements();
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll reveal animation for elements with the "reveal" class
function revealElements() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

// Trigger reveal on page load in case some elements are visible immediately
document.addEventListener("DOMContentLoaded", revealElements);

// Preloader functionality - fade out when the page has fully loaded
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("fade-out");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500); // Duration matches the fade-out transition in CSS
});
