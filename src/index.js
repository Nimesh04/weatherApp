import "./style.css";

const weatherData = document.querySelector("#weather-data");

const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", () =>{
    console.log("clicked")
    const searchInput = document.querySelector("#search");

    getWeatherData();
})



async function getWeatherData(){
    const params = new URLSearchParams();
    params.append('unitGroup','us');
    params.append('key','EM8A3GWWB7J9N3ADDKYG6U4JE');

    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mankato?';
    const data = fetch(url + params.toString())
                    .then(response => response.json())
                    .then(console.log);



}

