import "./style.css";

const weatherData = document.querySelector("#weather-data");

const searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click", () =>{
    const searchInput = document.querySelector("#search");

    getWeatherData(searchInput.value);
})



async function getWeatherData(searchInput){
    const params = new URLSearchParams();
    params.append('location', searchInput);
    params.append('unitGroup','us');
    params.append('key','EM8A3GWWB7J9N3ADDKYG6U4JE');

    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/?';
    const data = await fetch(url + params.toString())
                    .then(function(response){ 
                        return response.json()
                    });
    
    console.log(data);
    updateHtml(data);


}

function updateHtml(data){
    // const weatherDiv  = document.querySelector("#weather-data");
    const futureForecast = document.querySelector(".future-forecast");
    const weatherAddress = document.querySelector(".weather-address");


    weatherAddress.textContent = data.address;

    const currentTemp = document.querySelector(".current-temp");

    displayCurrentTemp(currentTemp, data);

    let next15 = data.days;
    
    next15.forEach(elm =>{
        const newDiv = document.createElement("div");
        newDiv.classList.add("futureElm");
        displayFutureTemp(newDiv, elm);
        futureForecast.append(newDiv);
        
    });


}


function displayCurrentTemp(elm, data){
    elm.innerHTML = ``;
    elm.innerHTML =`
    <p>Feels like: ${data.currentConditions.feelslike}</p>
    <p>Humidity: ${data.currentConditions.humidity}</p>
    <p>Snow: ${data.currentConditions.snow}</p>
    <p>Sunrise: ${data.currentConditions.sunrise}</p>
    <p>Sunset: ${data.currentConditions.sunset}</p>
    <p>Wind Speed: ${data.currentConditions.windspeed}</p>`;

}

function displayFutureTemp(elm, data){
    elm.innerHTML = ``;
    elm.innerHTML =`
    <p>Date: ${data.datetime}</p>
    <p>Feels like: ${data.feelslike}</p>
    <p>Humidity: ${data.humidity}</p>
    <p>Snow: ${data.snow}</p>
    <p>Sunrise: ${data.sunrise}</p>
    <p>Sunset: ${data.sunset}</p>
    <p>Wind Speed: ${data.windspeed}</p>`;

}