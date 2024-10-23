
const getApi = document.querySelector(".divElmt");
const searchInput = document.querySelector(".seaching"); 
let countryArray = []; 


async function getCountry() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  countryArray = data; 

  displayCountries(countryArray);
}


getCountry();


function displayCountries(countries) { 
  getApi.innerHTML = ""; 
  countries.forEach(country => { 
    console.log(country);
    const divElt = document.createElement("div");
    divElt.innerHTML = `
      <img class="w-full h-[200px]" src="${country.flags.png}" alt="Flag of ${country.name.common}" />
      <p>Population: ${country.population}</p>
      <h2>${country.name.common}</h2>
    `;
    getApi.appendChild(divElt);
  });
}
searchInput.addEventListener("keyup", (e) => {
  const term = e.target.value.toLowerCase();
  const filteredCountries = countryArray.filter(country => 
    country.name.common.toLowerCase().includes(term)
  );

  displayCountries(filteredCountries); 
});