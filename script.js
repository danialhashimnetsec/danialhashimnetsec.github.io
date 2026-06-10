// ============================
// TYPING EFFECT
// ============================

const textArray = [
  "Cybersecurity Student",
  "Network Security Enthusiast",
  "Future Network Security Analyst",
  "Looking For Internship"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const typing = document.getElementById("typing");

  if (!typing) return;

  const currentText = textArray[textIndex];

  if (!deleting) {
    typing.textContent = currentText.substring(0, charIndex++);
  } else {
    typing.textContent = currentText.substring(0, charIndex--);
  }

  let speed = deleting ? 50 : 100;

  if (!deleting && charIndex === currentText.length + 1) {
    deleting = true;
    speed = 1500;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    textIndex = (textIndex + 1) % textArray.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


// ============================
// FADE IN ANIMATION
// ============================

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },
  {
    threshold: 0.2
  }
);

document.querySelectorAll(".fade-in").forEach(section => {
  observer.observe(section);
});


// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e) {

    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


// ============================
// DARK / LIGHT MODE
// ============================

const themeBtn =
document.getElementById("theme-toggle");

if (
  localStorage.getItem("theme") === "light"
) {

  document.body.classList.add("light-mode");

  if(themeBtn){
    themeBtn.innerHTML = "☀️";
  }

}

if (themeBtn) {

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle(
      "light-mode"
    );

    if (
      document.body.classList.contains(
        "light-mode"
      )
    ) {

      themeBtn.innerHTML = "☀️";

      localStorage.setItem(
        "theme",
        "light"
      );

    } else {

      themeBtn.innerHTML = "🌙";

      localStorage.setItem(
        "theme",
        "dark"
      );

    }

  });

}


// ============================
// TERMINAL LOADING EFFECT
// ============================

const terminalLines =
document.querySelectorAll(".terminal p");

terminalLines.forEach((line, index) => {

  line.style.opacity = "0";

  setTimeout(() => {

    line.style.opacity = "1";

    line.style.transition = "0.5s";

  }, index * 800);

});


// ============================
// ACTIVE NAVBAR LINK
// ============================

window.addEventListener("scroll", () => {

  const sections =
  document.querySelectorAll("section");

  const navLinks =
  document.querySelectorAll("nav a");

  let current = "";

  sections.forEach(section => {

    const sectionTop =
    section.offsetTop - 120;

    if (
      window.scrollY >= sectionTop
    ) {

      current =
      section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {

      link.classList.add("active");

    }

  });

});


// ============================
// SCROLL TO TOP BUTTON
// ============================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.display = "none";
topBtn.style.padding = "10px 15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#00ff9f";
topBtn.style.color = "#000";
topBtn.style.fontWeight = "bold";

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";

  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// ============================
// PAGE LOAD ANIMATION
// ============================

window.addEventListener("load", () => {

  document.body.style.opacity = "1";

});

document.querySelectorAll(".project-gallery")
.forEach(gallery => {

    const images =
    gallery.querySelectorAll(".project-img");

    const prev =
    gallery.querySelector(".prev-btn");

    const next =
    gallery.querySelector(".next-btn");

    let current = 0;

    function showImage(index){

        images.forEach(img =>
            img.classList.remove("active")
        );

        images[index].classList.add("active");
    }

    next.addEventListener("click", () => {

        current++;

        if(current >= images.length){
            current = 0;
        }

        showImage(current);

    });

    prev.addEventListener("click", () => {

        current--;

        if(current < 0){
            current = images.length - 1;
        }

        showImage(current);

    });

});

document.querySelectorAll(".project-gallery")
.forEach(gallery => {

    const images =
    gallery.querySelectorAll(".project-img");

    let current = 0;

    function showImage(index){

        images.forEach(img =>
            img.classList.remove("active")
        );

        images[index].classList.add("active");
    }

    setInterval(() => {

        current++;

        if(current >= images.length){
            current = 0;
        }

        showImage(current);

    }, 3000); // change every 3 seconds

});

function openModal(id){

    document.getElementById(id).style.display =
    "block";

}

function closeModal(id){

    document.getElementById(id).style.display =
    "none";

}

window.onclick = function(event){

    document.querySelectorAll('.modal')
    .forEach(modal=>{

        if(event.target === modal){

            modal.style.display = "none";

        }

    });

}

function openModal(id){

    document.getElementById(id).style.display =
    "block";

}

function closeModal(id){

    document.getElementById(id).style.display =
    "none";

}

window.addEventListener("click", function(e){

    document.querySelectorAll(".modal")
    .forEach(modal=>{

        if(e.target === modal){

            modal.style.display = "none";

        }

    });

});