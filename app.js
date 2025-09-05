var apiKey = "c16065cf71f35ce65d3c93abd80d3d5b";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


var searchBox = document.querySelector(".search-autocomplete input");
var searchBtn = document.querySelector(".search-autocomplete button");

const input = document.querySelector("#city");
const weatherIcon = document.querySelector(".weather-icon");

let cities = [];

async function carregarCidades() {
    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/municipios`;
    const response = await fetch(url);
    cities = await response.json();
}

carregarCidades();

function searchCities(query)
{
    return cities.filter(c => c.nome.toLowerCase().includes(query)).slice(0, 5);
    // return cidades.filter(c => c.nome.toLowerCase().includes(query.toLowerCase())).slice(0, 10); // limitar resultados
}


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

input.addEventListener("input", async () => {
    let query = input.value.trim().toLowerCase();
    if (query.length < 3)
        return;

    let results = searchCities(query);
    showSuggestions(results);
})

function showSuggestions(cities)
{
    const list = document.querySelector("#suggestions");
    list.innerHTML = "";

    cities.forEach(city => {
        let li = document.createElement("li");
        li.textContent = `${city.nome} / ${city.microrregiao.mesorregiao.UF.sigla}`;
        li.addEventListener("click", () => {
            input.value = city.nome;
            list.innerHTML = "";
        })
        list.appendChild(li);

    })
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

searchBox.addEventListener("click", () => {
    input.value = "";
    input.ariaPlaceholder = "";
})

searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter")
    {
        checkWeather(searchBox.value);
    }
})



