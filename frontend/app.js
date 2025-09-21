var searchBox = document.querySelector(".search-autocomplete input");
var searchBtn = document.querySelector(".search-autocomplete button");

const input = document.querySelector("#city");
const weatherIcon = document.querySelector(".weather-icon");
const subtext = document.querySelector(".search-subtext");

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
}


async function checkWeather(city) {
    const url = "http://localhost:3000/weather";
    const response = await fetch(url +  `?city=${city}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".city").innerHTML = "Cidade não encontrada!";
        console.log(response.status);
        return;
    }
    var data = await response.json();
    if (data.valid_key === true) {
        
      
        console.log(data);
        document.querySelector(".city").innerHTML = data.results.city;
        document.querySelector(".temp").innerHTML = Math.round(data.results.temp) + "°C";
        document.querySelector(".tempMax").innerHTML = '<img src="img/arrow-max.svg">' +  Math.round(data.results.forecast[0].max) + "°C";
        document.querySelector(".tempMin").innerHTML = '<img src="img/arrow-min.svg">' + Math.round(data.results.forecast[0].min) + "°C";
        document.querySelector(".humidity").innerHTML = Math.round(data.results.humidity) + "%";
        document.querySelector(".wind").innerHTML = data.results.wind_speedy;

        let weatherCondition = data.results.condition_slug;
        weatherIcon.src = `img/${weatherCondition}.svg`;

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        subtext.innerHTML = "";
    }
    else {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".city").innerHTML = "Erro na API!";
        console.log("Erro na API");
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
        li.textContent = `${city.nome}/${city.microrregiao.mesorregiao.UF.sigla}`;
        li.addEventListener("click", () => {
            input.value = city.nome;
            list.innerHTML = "";
            checkWeather(city.nome);
        })
        list.appendChild(li);

    })
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

searchBox.addEventListener("click", () => {
    input.value = "";
    input.placeholder = "";
    subtext.innerHTML = "Digite o nome da cidade";
})

searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter")
    {
        checkWeather(searchBox.value);
    }
})

checkWeather("Foz do Iguaçu,PR");



