const main = document.querySelector(".main");
const mainContainer = document.querySelector(".main-container");
const sectionOne = document.querySelector(".sect-1");

const sectionOneOptions = {
  threshold: 0.9,
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      main.classList.add("active");
      mainContainer.classList.add("active");
    } else {
      main.classList.remove("active");
      mainContainer.classList.remove("active");
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);

/* FOOTER MENU
      =============================== */

const footerMenu = document.querySelector(".menu-footer");
const contactSection = document.querySelector(".sect-4");

const contactOptions = {
  threshold: 0,
};

const contactObserver = new IntersectionObserver(function (
  entries,
  contactObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      footerMenu.classList.add("active");
      footerMenu.classList.remove("active-menu");
    } else {
      footerMenu.classList.remove("active");
    }
  });
},
contactOptions);
contactObserver.observe(contactSection);
