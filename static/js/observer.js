const block = document.querySelectorAll(".blocks");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);
block.forEach((blocks) => {
  observer.observe(blocks);
  card.classList.add("blocks");
});
