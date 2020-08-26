const main = document.querySelector(".main");
const sectionOne = document.querySelector(".sect-1");

const sectionOneOptions = {
  threshold: 1,
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      main.classList.add("active");
    } else {
      main.classList.remove("active");
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);
