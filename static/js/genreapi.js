async function fetchData() {
    await fetch ('https://binaryjazz.us/wp-json/genrenator/v1/genre/')  
    let fetchLog = await response.json();
}

console.log (fetchLog);

fetchData();


// .then( response => response.json() )
      // .then( data => {
      //   pElement.innerHTML = data
      // })
      // .catch( error => console.error(`Error fetching data: ${error.message}`) );