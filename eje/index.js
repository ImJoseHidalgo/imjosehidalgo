const main = document.querySelector(".main");
const sectionOne = document.querySelector(".sect-1");
const sectionThree = document.querySelector(".sect-3");

const sectionOneOptions = {
  //   rootMargin: "-200px 0px 0px 0px",
  threshold: 1,
};
const sectionThreeOptions = {
  threshold: 0.1,
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

const sectionThreeObserver = new IntersectionObserver(function (
  entries,
  sectionThreeObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("tres");
      main.classList.add("remove");
    } else {
      main.classList.remove("remove");
    }
  });
},
sectionThreeOptions);

sectionThreeObserver.observe(sectionThree);
