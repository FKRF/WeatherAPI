var apiKey = "c16065cf71f35ce65d3c93abd80d3d5b";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

var FozDoIguaçu = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Foz do Iguaçu&appid=c16065cf71f35ce65d3c93abd80d3d5b" 

var searchBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".tempMax").innerHTML = '<img src="img/arrow-max.svg">' +  Math.round(data.main.temp_max) + "°C";
    document.querySelector(".tempMin").innerHTML = '<img src="img/arrow-min.svg">' + Math.round(data.main.temp_min) + "°C";
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
