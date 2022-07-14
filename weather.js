
const API_KEY = "bfaa613564b6762cbea175fd750e8735"

function onGeoOk(position) {
     const lat = position.coords.latitude;
     const lon = position.coords.longitude;
     console.log("You live in", lat, lon);
     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
     fetch(url)
          .then((response) => response.json())
          .then((data) => {
               const weather = document.querySelector("#weather")
               weather.innerText = Math.floor(data.main.temp) + '°'
               const city = document.querySelector("#location")
               city.innerText = data.name;
               const condition = document.querySelector("#condition")
               condition.innerText = data.weather[0].main;
               const max_min = document.querySelector("#max_min")
               max_min.innerText = `최고 : ${Math.floor(data.main.temp_max) + '°'} 최저 : ${Math.floor(data.main.temp_min) + '°'}`
               
          });
}

function onGeoError() {
     alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

//weather.innerText = `${data.weather[0].main} ${data.main.temp}`