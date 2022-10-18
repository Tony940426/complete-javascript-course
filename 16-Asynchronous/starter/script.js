'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//        //https://restcountries.com/v2/
///////////////////////////////////////

// const getCountryData = function(country){
// fetch(`https://restcountries.com/v2/name/${country}`)
// .then(response => response.json())
//   .then(([data]) => {
//     const html =`
//     <article class="country">
//     <img class="country__img" src=${data.flag}>
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${data.population}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//     </article>
//     `
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
//   });
// };
// const renderCountry = function(data, className = ''){
//   const html = `
//   <article class="country ${className}">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${data.population}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
//  </article>
// `
// countriesContainer.insertAdjacentHTML('beforeend', html);
// countriesContainer.style.opacity = 1;
// }

// const getCountryData = function(country){
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`)
//   request.send();

//   request.addEventListener('load', function(){
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //render country 1
//     renderCountry(data);

//     //get neighbour country
//     const neighbour = data.borders?.[0]
//     if (!neighbour) return;
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)
//     request2.send();
//     request2.addEventListener('load', function(){
//     const data2 = JSON.parse(this.responseText);
//     renderCountry(data2, 'neighbour');
//     });
//   });
// };
const getCountryData = function(country){
  fetch(`https://restcountries.com/v2/name/${country}`)
  .then(response => response.json())
  .then(([data]) => {
    console.log(data);
  });
};

//Object is a container for a future value (response for a ajax call)
getCountryData('usa');

// .then(response => response.json())
