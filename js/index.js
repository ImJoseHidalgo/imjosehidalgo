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

  //document.querySelector(".body").classList.toggle("active");
}

document.querySelector(".menu-button").addEventListener("click", () => {
  menuActions();
});
document.querySelector(".menu-portfolio").addEventListener("click", () => {
  menuActions();
});
document.querySelector(".menu-contact").addEventListener("click", () => {
  menuActions();
});

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

const lang = document.querySelector(".blog-section");
const lang2 = document.querySelector(".social-container");
const lang3 = document.querySelector(".languages");
const lang4 = document.querySelector(".logo");
const lang5 = document.querySelector(".portf-container");
const lang6 = document.querySelector("span");
const lang7 = document.querySelector(".contact-footer-social");
const lang8 = document.querySelector(".email");
const lang9 = document.querySelector(".menu-email");

mouseHover = function (e) {
  e.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  e.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
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
