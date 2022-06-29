const blocks = document.querySelectorAll('section.blocks')

// Voor elke section binnen class block
blocks.forEach(section => {
  //Aanwijzen van de 1e foto en die weghalen
  const image = section.children[0];
  image.remove();

  //Omdat de eerste foto is verwijdered, is de telling weer op 0 en word de API geplaatst
  const thumb = section.children[0];

  fetch('https://place.dog/200/200')

  // Deze API hoeft niet omgezet te worden naar een .json omdat het al een .json API is
  // De "thumbNail" vullen met de "data"(API) en geef ik de URL mee
  .then( data => {
    thumb.innerHTML = `<img src="${data.url}"/>`
  })

  // Hiermee catch ik de error op als er een error is.
  .catch( error => console.error(`Error fetching message: ${error.message}`)
  );
});
  