const weatherBlok = document.querySelector('#weather');
async function loadWeather (e){
    weatherBlok.innerHTML =`
    <div class="weather__loading">
    <img src="img/ZWdx.gif" alt="Завантаження..">
    </div>`;
}
if (weatherBlok) {
    loadWeather ();
}