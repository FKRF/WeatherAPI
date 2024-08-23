var apiKey = "c16065cf71f35ce65d3c93abd80d3d5b";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

var FozDoIguaçu = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Foz do Iguaçu&appid=c16065cf71f35ce65d3c93abd80d3d5b" 

var searchBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);

    console.clear();
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        console.log(response.status);
    }
    else {
        var data = await response.json();
      
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".tempMax").innerHTML = '<img src="img/arrow-max.svg">' +  Math.round(data.main.temp_max) + "°C";
        document.querySelector(".tempMin").innerHTML = '<img src="img/arrow-min.svg">' + Math.round(data.main.temp_min) + "°C";
        document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

        let weatherCondition = data.weather[0].main.toLowerCase();
        weatherIcon.src = `img/${weatherCondition}.png`;

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
    
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
