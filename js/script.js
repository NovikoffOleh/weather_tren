const weatherBlok = document.querySelector('#weather');

async function loadWeather (e){
    weatherBlok.innerHTML =`
    <div class="weather__loading">
    <img src="img/ZWdx.gif" width="150px" height="100px" alt="Завантаження..">
    </div>`;

const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kyiv&appid=e5e67bd5c36ddb64a388f957cf7d7af6'
const response =await fetch (server, {
    method: 'GET',
});

const responseResult = await response.json();
if (response.ok) {
   getWeather(responseResult);
} else {
    weatherBlok.innerHTML = responseResult.message;
}
}

function getWeather(data){
    console.log(data)
    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelslike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;
}


if (weatherBlok) {
    loadWeather ();
}