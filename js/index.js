document.querySelector(".menu-button").addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("active");
  document.querySelector(".menu-button").classList.toggle("active");
  document.querySelector(".header").classList.toggle("active");
  document.querySelector(".bottom").classList.toggle("active");
  document.querySelector(".right").classList.toggle("active");
  document.querySelector(".left").classList.toggle("active");
  document.querySelector(".menu-container").classList.toggle("active");
});
