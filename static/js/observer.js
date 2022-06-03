const allBlocks = document.querySelectorAll(".blocks");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.2,
  }
);

allBlocks.forEach((block) => {
  observer.observe(block);
  block.classList.add("hidden");
});
