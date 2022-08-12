//homework week 5

let todayDate = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[todayDate.getDay()];
let hours = todayDate.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = todayDate.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let newWeekDayHour = document.querySelector("#weekDayHour");
newWeekDayHour.innerHTML = `${day} ${hours}:${minutes}`;

function fahrenheitChange(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#tempMain");
  let fahrenheitTemperature = Math.round(currentTemp.innerHTML * 1.8 + 32);
  currentTemp.innerHTML = `${fahrenheitTemperature}`;
}

let fahrenheit = document.querySelector("#fahrenheitTemp");
fahrenheit.addEventListener("click", fahrenheitChange);

function celsiusChange(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#tempMain");
  let celsiusTemperature = Math.round((currentTemp.innerHTML - 32) / 1.8);
  currentTemp.innerHTML = `${celsiusTemperature}`;
}

let celsius = document.querySelector("#celsiusTemp");
celsius.addEventListener("click", celsiusChange);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let showTemp = document.querySelector("#tempMain");
  showTemp.innerHTML = temperature;
  let cityname = response.data.name;
  let showCityName = document.querySelector("#city-main");
  showCityName.innerHTML = cityname;
}

function searchCity(event) {
  event.preventDefault();
  let cities = document.querySelector("#usercityInput");
  let city = cities.value;
  let apiKey = "9d9254fabd8a44bac14ad45441ef74d5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showLocation(position) {
  let latit = position.coords.latitude;
  let longit = position.coords.longitude;
  let apiKey = "9d9254fabd8a44bac14ad45441ef74d5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latit}&lon=${longit}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}

let search = document.querySelector("#submitCityid");
search.addEventListener("click", searchCity);

let currentButton = document.querySelector("#currentid");
currentButton.addEventListener("click", currentLocation);
