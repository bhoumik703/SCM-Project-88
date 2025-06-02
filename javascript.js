// Dark Mode Toggle
document.getElementById("toggleDarkMode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Modal functionality for project details
document.querySelectorAll(".viewDetails").forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("modal").style.display = "block";
  });
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

// Contact form submission
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

// Scroll reveal animation
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
