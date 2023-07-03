// const api_key = `46ad7457603b9b0104e633e78cd60e16`;
const API_KEY = `f7d6b08024678d3af46cda8fc1015b2b`;
const loadWeatherData = (area) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data))
    .catch((error) => console.log(error));
};
const displayTemperature = (data) => {
  console.log(data.sys);
  const Temperature = document.getElementById("Temperature");
  Temperature.innerText = data.main.temp;
  // set country
  const countryName = document.getElementById("country_Name");
  countryName.innerText = data.sys.country;

  // set city
  const cityName = document.getElementById("city_name");
  cityName.innerText = data.name;

  // set condition
  const condition = document.getElementById("condition");
  condition.innerText = data.weather[0].main;
};
document.getElementById("search_btn").addEventListener("click", function () {
  const searchField = document.getElementById("search_field");
  const city = searchField.value;

  loadWeatherData(city);
});
loadWeatherData("chittagong");
