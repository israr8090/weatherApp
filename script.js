const inputBox = document.querySelector('.input-box'); ////getting id by Queryselector and const because we dont want to change.
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const city_name = document.getElementById("city-name");
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city) {
   const api_key = "439a25f56a33f96fc8c8ea251294d127";
   const url = `https://api.openweathermap.org/data/2.5/weather?q=
     ${city}&appid=${api_key}`;

   const weather_data = await fetch(`${url}`).then(response => response.json());
  ///// json will convert it into string


   if (weather_data.cod === `404`) {
      location_not_found.style.display = 'flex';
      weather_body.style.display = "none";
      console.log("error");
      return;
   };

location_not_found.style.display = 'none';
weather_body.style.display = "flex";
city_name.innerHTML = `${weather_data.name}`;
temperature.innerHTML= `${Math.round(weather_data.main.temp - 273.15)}℃`;
description.innerHTML = `${weather_data.weather[0].description}`;
humidity.innerHTML = `${weather_data.main.humidity}%`;
wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

console.log(weather_data);

switch (weather_data.weather[0].main) {
   case 'Clouds':
      weather_img.src = "/images/cloud.png";
         break;
      case 'Clear':
         weather_img.src = "/images/Clear.png";
         break;
      case 'Rain':
         weather_img.src = "/images/Rain.png";
         break;
      case 'Mist':
         weather_img.src = "/images/Mist.png";
         break;
      case 'Snow':
         weather_img.src = "/images/Snow.png";
         break;
   }
}

searchBtn.addEventListener('click', () => {
   checkWeather(inputBox.value)
   });
//whenever click we click get the location and gave callback function 