document.querySelector(".menu-button").addEventListener("click", () => {
  // Block Scroll
  document.querySelector(".body").classList.toggle("active");

  document.querySelector(".menu").classList.toggle("active");
  document.querySelector(".menu-background").classList.toggle("active");
  document.querySelector(".menu-button").classList.toggle("active");
  document.querySelector(".header-container").classList.toggle("active");
  document.querySelector(".header").classList.toggle("active");
  document.querySelector(".bottom").classList.toggle("active");
  document.querySelector(".right").classList.toggle("active");
  document.querySelector(".left").classList.toggle("active");
  document.querySelector(".menu-container").classList.toggle("active");

  // Responsive
  document.querySelector(".languages").classList.toggle("active");
  document.querySelector(".logo").classList.toggle("active");
  document.querySelector(".name-container").classList.toggle("active");
  document.querySelector(".portf-container").classList.toggle("active");
});
