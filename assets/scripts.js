
const API_KEY = "0bf9039dd2edf1ec3fe9dc7750e04fa2"
const searchBox = document.getElementById("search-box");
const searchButton = document.getElementById("search-button");
const iconContainer = document.querySelector(".icon-container");
const temperatureContainer = document.querySelector(".temperature");
const descriptionContainer = document.querySelector(".description");
const locationContainer = document.querySelector(".location");
const humidityContainer = document.querySelector(".humidity");
const windSpeedContainer = document.querySelector(".wind-speed");
const sunriseContainer = document.querySelector(".sunrise");
const sunsetContainer = document.querySelector(".sunset");

searchButton.addEventListener("click", () => {
  const city = searchBox.value;
  if (city !== "") {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        const icon = data.weather[0].icon;
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const weatherId = data.weather[0].id;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        const body = document.querySelector("body");

        iconContainer.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon" />`;
        temperatureContainer.innerHTML = `${temperature}°C`;
        descriptionContainer.innerHTML = description;
        locationContainer.innerHTML = `${data.name}, ${data.sys.country}`;
        humidityContainer.innerHTML = `Humidity: ${humidity}%`;
        windSpeedContainer.innerHTML = `Wind Speed: ${windSpeed} m/s`;
        sunriseContainer.innerHTML = `Sunrise: ${sunrise}`;
        sunsetContainer.innerHTML = `Sunset: ${sunset}`;;

        if (weatherId >= 200 && weatherId <= 232) {
          body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?thunderstorm')";
        } else if (weatherId >= 300 && weatherId <= 321) {
          body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?rain')";
        } else if (weatherId >= 500 && weatherId <= 531) {
          body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?rain')";
        } else if (weatherId >= 600 && weatherId <= 622) {
          body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?snow')";
        } else if (weatherId >= 701 && weatherId <= 781) {
          body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?atmosphere')";
        } else if (weatherId === 800) {
          body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?clear')";
        } else if (weatherId >= 801 && weatherId <= 804) {
          body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?clouds')";
        } else {
          body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?landscape')";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
