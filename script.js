// Typing effect
const textArray = [
  "Cybersecurity Analyst",
  "Network Security Enthusiast",
  "Future SOC Specialist"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const typing = document.getElementById("typing");

  if (i < textArray.length) {
    if (!isDeleting && j <= textArray[i].length) {
      currentText = textArray[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = textArray[i].substring(0, j--);
    }

    typing.innerHTML = currentText;

    if (j === textArray[i].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % textArray.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));


// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});