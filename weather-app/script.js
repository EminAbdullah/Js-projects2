const apiKey = '32b3acacc926ad7c7fe9e1703e545ff3';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), {
        origin: "cors"
    });
    const respData = await resp.json();

    addWeatherToPage(respData);
   
}

function addWeatherToPage(data){
    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML =`
    <h2>  <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"/>
    ${data.main.temp.toFixed(1)}°C   </h2>
    <small>${data.weather[0].main}</small>
    `;

    main.innerHTML="";
    console.log(data.weather[0].icon);
    main.appendChild(weather);
}


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const city = search.value;

    if (city) {
        getWeatherByLocation(city);
    }

})
