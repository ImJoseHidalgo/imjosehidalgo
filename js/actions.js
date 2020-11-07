/*  MENU ACTIONS
    =============================== */
function menuActions() {
  document.querySelector(".menu").classList.toggle("active");
  document.querySelector(".menu-background").classList.toggle("active");
  document.querySelector(".menu-button").classList.toggle("active");
  document.querySelector(".header-container").classList.toggle("active");
  document.querySelector(".header").classList.toggle("active");
  document.querySelector(".bottom").classList.toggle("active");
  document.querySelector(".right").classList.toggle("active");
  document.querySelector(".left").classList.toggle("active");
  document.querySelector(".menu-container").classList.toggle("active");
  document.querySelector(".menu-footer").classList.toggle("active-menu");
  // Responsive
  document.querySelector(".languages").classList.toggle("active");
  document.querySelector(".logo").classList.toggle("active");
  document.querySelector(".name-container").classList.toggle("active");
  document.querySelector(".portf-container").classList.toggle("active");
}
clickMenu = function (e) {
  document.querySelector(e).addEventListener("click", () => {
    menuActions();
  });
};
clickMenu(".menu-button");
clickMenu(".menu-portfolio");
clickMenu(".menu-contact");

document.querySelector(".sect-1").addEventListener("click", () => {
  document.documentElement.classList.toggle("color");
});

/*  CURSOR POINTER
    =============================== */
let innerCursor = document.querySelector(".inner-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
}

const lang = document.querySelectorAll(".blog-section");
const lang2 = document.querySelectorAll(".icon");
const lang3 = document.querySelectorAll(".lang-icon");
const lang4 = document.querySelectorAll(".logo");
const lang5 = document.querySelectorAll(".portf-container");
const lang6 = document.querySelectorAll("span");
const lang7 = document.querySelectorAll(".icon-footer");
const lang8 = document.querySelectorAll(".email");
const lang9 = document.querySelectorAll(".menu-email");

mouseHover = function (el) {
  el.forEach((item) => {
    item.addEventListener("mouseover", () => {
      innerCursor.classList.add("grow");
    });
    item.addEventListener("mouseleave", () => {
      innerCursor.classList.remove("grow");
    });
  });
};

mouseHover(lang);
mouseHover(lang2);
mouseHover(lang3);
mouseHover(lang4);
mouseHover(lang5);
mouseHover(lang6);
mouseHover(lang7);
mouseHover(lang8);
mouseHover(lang9);
