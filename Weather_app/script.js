const apiKey = "591a6e4538beeb3aa3bdf9473c1ea20d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const text = document.querySelector("weatherText");
//const text = document.querySelector("weather");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else if (response.status != 404) {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "'c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    console.log("fetch");

    if (data.weather[0].main == "Clouds") {
      weatherText.innerHTML = "Clouds";
    } else if (data.weather[0].main == "Clear") {
      weatherText.innerHTML = "Clear";
    } else if (data.weather[0].main == "Rain") {
      weatherText.innerHTML = "Rain";
    } else if (data.weather[0].main == "Drizzle") {
      weatherText.innerHTML = "Drizzle";
    } else if (data.weather[0].main == "Mist") {
      weatherText.innerHTML = "Mist";
    }

    document.querySelector(".weather").style.display = "block"; // shows the weather display.
    document.querySelector(".error").style.display = "none"; //hides the error message.
  }
  searchBox.value = ""; // for making input box clean.
}

checkWeather();

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
