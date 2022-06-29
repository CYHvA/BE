// Target DOM .blocks class in profile.ejs
const target = document.querySelectorAll(".blocks");

// Maken van een IntersectionObserver met waarde "entries"
const observer = new IntersectionObserver(
  (entries) => {

    // Voor elke "entry" uit waarde "entries"
    entries.forEach((entry) => {

      // Als vieport = is Intersected dan voeg .show class toe
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  //Voor elke item vanuit target/.blocks > "block"
  target.forEach((block) => {

  // Observeer elke "block"
  observer.observe(block);

  //Voeg vervolgens ".hidden" class toe
  block.classList.add("hidden");
});
