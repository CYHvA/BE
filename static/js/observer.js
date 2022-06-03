const allAnimationItems = document.querySelectorAll(".blocks");

const options = {
  rootMargin: "0px",
  threshold: 0.2,
};

function callbackFunction(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.replace("verbergen", "fade");
    }
  });
}

const observer = new IntersectionObserver(callbackFunction, options);

allAnimationItems.forEach((item) => {
  //observeer het element
  observer.observe(item);
});

window.addEventListener('load', () => {
    allAnimationItems.forEach((block) => {
          block.classList.add("verbergen");
      });
})
