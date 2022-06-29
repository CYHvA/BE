// // Link zetten met de ID "thumbnail"
// const thumbNail = document.getElementById('thumbnail')

// // Link zetten met de "default" img (Fallback)
// const fbImg = document.querySelector('.img')

// // De image verwijderen als Javascript aan staat
// function fallBack(){
//   fbImg.remove();
// };

// fallBack()

// // Ophalen van API data 
// fetch('https://place.dog/200/200')
//   // .then( res => console.log(res))

//   // Deze API hoeft niet omgezet te worden naar een .json omdat het al een .json API is
//   // De "thumbNail" vullen met de "data"(API) en geef ik de URL mee
//   .then( data => {
//     thumbNail.innerHTML = `<img src="${data.url}"/>`
//   })

//   // Hiermee catch ik de error op als er een error is.
//   .catch( error => console.error(`Error fetching message: ${error.message}`)
//   );


const sections = document.querySelectorAll('section.blocks')

sections.forEach(section => {
  const image = section.children[0];
  image.remove();
  const thumb = section.children[0];
  fetch('https://place.dog/200/200')
  // .then( res => console.log(res))

  // Deze API hoeft niet omgezet te worden naar een .json omdat het al een .json API is
  // De "thumbNail" vullen met de "data"(API) en geef ik de URL mee
  .then( data => {
    thumb.innerHTML = `<img src="${data.url}"/>`
  })

  // Hiermee catch ik de error op als er een error is.
  .catch( error => console.error(`Error fetching message: ${error.message}`)
  );
});
  