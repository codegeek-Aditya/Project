// constant

const searchButton = document.querySelector(".search-btn");
const cityName = document.querySelector(".city-name");
const blankCity = document.querySelector(".blank-city");
const blankDate = document.querySelector(".blank-date");
const blankTemperature = document.querySelector(".blank-temp");
const clearBtn = document.querySelector(".clear-btn");

// api function
async function getCityData(blankCity) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=0da7b90b44e14fa7ad0155639240801&q=${blankCity}&aqi=no`
  );
  return await promise.json();
}
// search button function
searchButton.addEventListener("click", async () => {
  const value = cityName.value;
  const result = await getCityData(value);
  console.log(result);
  blankCity.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
  blankDate.innerText = result.location.localtime;
  blankTemperature.innerText = `${result.current.temp_c}  degree Celsius` ;
});

// clear button function

clearBtn.addEventListener("click", () => {
  cityName.value = "";
  blankCity.innerText = "";
  blankDate.innerText = "";
  blankTemperature.innerText = "";
});
