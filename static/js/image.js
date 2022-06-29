// Link zetten met de ID "thumbnail"
const thumbNail = document.getElementById('thumbnail')

// Link zetten met de "default" img (Fallback)
const fbImg = document.querySelector('.img')

// De image verwijderen als Javascript aan staat
function fallBack(){
  fbImg.remove();
};

fallBack()

// Ophalen van API data 
fetch('https://place.dog/200/200')

  // Deze API hoeft niet omgezet te worden naar een .json omdat het al een .json API is
  // De "thumbNail" vullen met de "data"(API) en geef ik de URL mee
  .then( data => {
    thumbNail.innerHTML = `<img src="${data.url}"/>`
  })

  // Hiermee catch ik de error op als er een error is.
  .catch( error => console.error(`Error fetching message: ${error.message}`)
  );


  