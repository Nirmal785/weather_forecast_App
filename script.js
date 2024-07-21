const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body')

async function checkWeather(city){
    const api_key = "3d68b36f6387085d39620c37b7d09366"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch(`${url}`).then(Response => Response.json());
    
   if(weather_data.cod === `404`){
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    console.log("error");
    return;
   }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
   
    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed}Km/H`

   switch(weather_data.weather[0].main){
      case 'Clouds':
        weather_img.src = "/assets/cloud.png";
        break;
      case 'Mist':
        weather_img.src = "/assets/mist.png";
        break;
      case 'Rain':
        weather_img.src = "/assets/rain.png";
        break;
      case 'Clean':
        weather_img.src = "/assets/clean.png";
        break;
      case 'Drizzle':
        weather_img.src = "/assets/rain.png";
        break;
      case 'Haze':
        weather_img.src = "/assets/haze.png";
        break;
      case 'Clear':
        weather_img.src = "/assets/clear.png";
        break;
      case 'Thunderstorm':
        weather_img.src = "/assets/Thunderstorm.png";
        break;
    
}
  
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
})



