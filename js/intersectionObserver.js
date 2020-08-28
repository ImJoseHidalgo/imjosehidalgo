const main = document.querySelector(".main");
const skills = document.querySelector(".skills");
const mainContainer = document.querySelector(".main-container");
const sectionOne = document.querySelector(".sect-1");
const sectionTwo = document.querySelector(".sect-2");

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

// Skills Section

const sectionTwoOptions = {
  threshold: 0.5,
};

const sectionTwoObserver = new IntersectionObserver(function (
  entries,
  sectionTwoObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      skills.classList.add("active");
      main.classList.add("active-2");
    } else {
      skills.classList.remove("active");
      main.classList.remove("active-2");
    }
  });
},
sectionTwoOptions);
sectionTwoObserver.observe(sectionTwo);
