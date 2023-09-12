/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navMenuBtn = document.getElementById("nav-menu-btn"),
  navCloseBtn = document.getElementById("nav-close-btn");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navMenuBtn) {
  navMenuBtn.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
    navMenuBtn.style.display = "none";
    navCloseBtn.style.display = "inline-block";
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navCloseBtn) {
  navCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    navMenuBtn.style.display = "inline-block";
    navCloseBtn.style.display = "none";
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  // When we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
  navMenuBtn.style.display = "inline-block";
  navCloseBtn.style.display = "none";
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== TYPING ANIMATION ====================*/
var typed = new Typed(".typing", {
  strings: ["Web Developer", "Programmer", "Frontend Developer"],
  typeSpeed: 200,
  BackSpeed: 10,
  loop: true,
});

/*==================== ABOUT SHOW MORE ====================*/
const readMoreBtn = document.querySelector(".showmore");
const readMore = document.querySelector(".readmore");

readMoreBtn.addEventListener("click", () => {
  readMore.classList.toggle("showcontent");
  if (readMore.classList.contains("showcontent")) {
    readMoreBtn.textContent = "Show Less";
  } else {
    readMoreBtn.textContent = "Show More";
  }
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabsContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification_active");
    });
    target.classList.add("qualification_active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification_active");
    });
    tab.classList.add("qualification_active");
  });
});

/*==================== PROJECTS SWIPER  ====================*/
let swiper = new Swiper(".project_container", {
  cssMode: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  durattion: 2500,
  delay: 400,
  //reset: true /*Animation repeat*/
});

sr.reveal(`.home_data, .project_container, .footer_container`);
sr.reveal(`.home_social`, { delay: 600, origin: "left", interval: 100 });
sr.reveal(`.home_img`, { delay: 600, origin: "right", interval: 100 });
sr.reveal(`.about_container`, { origin: "bottom", interval: 100 });
sr.reveal(`.about_info`, { delay: 600, origin: "top", interval: 100 });
sr.reveal(`.about_img`, { delay: 600, origin: "left", interval: 100 });
sr.reveal(`.skills_content:nth-child(1)`, { origin: "left" });
sr.reveal(`.skills_content:nth-child(2)`, { origin: "right" });
sr.reveal(`.qualification_section`, { interval: 100 });
sr.reveal(`.contact_container`, { origin: "bottom" });
