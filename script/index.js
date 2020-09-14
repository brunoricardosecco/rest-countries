const cardListContainer = document.getElementById("cardsList");

async function getAllCountries() {
  const response = await fetch("https://restcountries.eu/rest/v2/all", {
    method: "GET",
  });

  const formattedRes = await response.json();
  putInList(formattedRes);
}

function putInList(countries) {
  const countriesList = countries.map((country) => getCardObj(country));

  countriesList.map((country) => {
    cardListContainer.innerHTML += country;
  });
}

function getCardObj(country) {
  return `
  <button class="countryCard">
  <img src="${country.flag}" alt="country flag" />
  <div class="cardInfosContainer">
    <h3 class="cardTitle">${country.name}</h3>
    <div class="cardInfoLine">
      <p>Population:</p>
      <p>${country.population}</p>
    </div>
    <div class="cardInfoLine">
      <p>Region:</p>
      <p>${country.area}</p>
    </div>
    <div class="cardInfoLine">
      <p>Capital:</p>
      <p>${country.capital}</p>
    </div>
  </div>
</button>
  `;
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

getAllCountries();
