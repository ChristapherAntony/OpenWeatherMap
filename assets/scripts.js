


API_KEY = "0bf9039dd2edf1ec3fe9dc7750e04fa2"

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
                sunsetContainer.innerHTML = `Sunset: ${sunset}`;


                // Change background image based on weather condition
                if (weatherId >= 200 && weatherId < 300) {
                    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
                } else if (weatherId >= 300 && weatherId < 400) {
                    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1585400463932-d9d2f70ca917?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9udHJlYXIlMjB3ZWF0aGVyJTIwd2VhdGhlcixiZWlnaHRzfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
                } else if (weatherId >= 500 && weatherId < 600) {
                    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1597198010327-7913b4c0b4b5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGJvdHRsZXNzfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
                } else if (weatherId >= 600 && weatherId < 700) {
                    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1527149531592-5a810fda9669?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fHNuaXBwZXJzfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
                } else if (weatherId >= 700 && weatherId < 800) {
                    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1499615327322-0c3ad3aef344?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHNlYXJjaCUyMGZpdG5lc3N8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
                } else if (weatherId === 800) {
                    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlJTIwd2VhdGhlcnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
                } else if (weatherId > 800 && weatherId < 900) {
                    body.style.backgroundImage = "url('https://images.unsplash.com/photo-1490699481841-7f84e71c4f12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGJveSUyMHdlYXRoZXJ8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
                }


              
            })
            .catch((error) => {
                console.log(error);
            });
    }
});


