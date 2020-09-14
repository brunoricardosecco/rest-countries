const countryContainer = document.getElementById("countryContainer");

function redirectBack() {
  window.location.replace("http://www.w3schools.com");
}

async function getCountry() {
  const urlParams = new URLSearchParams(window.location.search);
  const countryName = urlParams.get("countryName");
  countryContainer.innerHTML =
    "<img src='assets/loading-gif-transparent-10.gif' class='loadingBar' />";
  const response = await fetch(
    `https://restcountries.eu/rest/v2/name/${countryName}`
  );
  const formattedRes = await response.json();
  countryContainer.innerHTML = "";
  putCountry(formattedRes[0]);
}

function getAllWords(wordsArray) {
  let words = "";
  wordsArray.map((word, index) => {
    if (index === wordsArray.length - 1) {
      words += word.name;
      return;
    }
    words += `${word.name}, `;
  });
  return words;
}

function putCountry(country) {
  countryContainer.innerHTML = "";

  const currencies = getAllWords(country.currencies);
  const languages = getAllWords(country.languages);

  const element = `
  <img src="${country.flag}" class="detailsImage" />
        <div class="informationContainer">
          <h3>${country.name}</h3>
          <div class="informationDetailsContainer">
            <div class="informationLeftContainer">
              <div>
                <p>Native Name:</p>
                <p>${country.nativeName}</p>
              </div>
              <div>
                <p>Population:</p>
                <p>${country.population}</p>
              </div>
              <div>
                <p>Region:</p>
                <p>${country.area}</p>
              </div>
              <div>
                <p>Sub Region:</p>
                <p>${country.subregion}</p>
              </div>
              <div>
                <p>Capital:</p>
                <p>${country.capital}</p>
              </div>
            </div>
            <div class="informationRightContainer">
              <div>
                <p>Top Level Domain:</p>
                <p>${country.topLevelDomain[0]}</p>
              </div>
              <div>
                <p>Currencies:</p>
                <p>${currencies}</p>
              </div>
              <div>
                <p>Languages:</p>
                <p>${languages}</p>
              </div>
            </div>
          </div>
          <div class="countriesContainer">
            <h4>Border Countries:</h4>
            <ul>${country.borders.map(
              (country) => `<li><p>${country}</p></li>`
            )}
            </ul>
          </div>
        </div>`;

  countryContainer.innerHTML += element;
}

getCountry();
