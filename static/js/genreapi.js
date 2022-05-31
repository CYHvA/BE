console.log('test');

const accessToken =
  'BQDzsQzaQTMMoUH2xLftPtAOdQ1O2tO9My3EdMVdQutATdmt4991ZIVjm3a9QZxBNQfEkQ7bSWlBIpSOBzPidmsctSju-brwTL22Lv4xgzuT9-DTB70Sm_toFxbIBI5PwbojAMk8emy7WYHE6iUpCYBPVABtRSOpCzG55aER';
fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + accessToken,
    refresh_token:
      'AQAOpqd6G_qpK8FaK_UfkYm5sk-sa-AFw7Bbq9cOc6SSzx39cydsXzJjUYWomm7dR-lrT1McvctR-CDP-uocPglx7ogJHgS-WmQtjbdyDLNAw7vWOdz5z05UAE2RbG4_T38',
  },
}).then((response) => {
  console.log(
    response.json().then((data) => {
      console.log(data);
      data.genres.forEach((e) => {
        console.log(e);
      });
    })
  );
});
