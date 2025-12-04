import "./style.css";
import { getWeatherData } from "./fetchData";
import { 
    weatherAddress,
    weatherData,
    currentTemp,
    searchBtn,
    futureForecast,
    feelsLike,
    humidity,
    snow,
    minTemp,
    maxTemp,
    windSpeed
 } from "./query";


searchBtn.addEventListener("click", () =>{

    const searchInput = document.querySelector("#search").value;
    search(searchInput);
})


async function search(searchInput){
    console.log(searchInput);
    const data = await getWeatherData(searchInput)
    updateHtml(data);
}




function updateHtml(data){

    weatherAddress.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M11.5,7C12.88,7 14,8.12 14,9.5C14,10.88 12.88,12 11.5,12C10.12,12 9,10.88 9,9.5C9,8.12 10.12,7 11.5,7M11.5,8C10.67,8 10,8.67 10,9.5C10,10.33 10.67,11 11.5,11C12.33,11 13,10.33 13,9.5C13,8.67 12.33,8 11.5,8M6.8,12.36L11.5,20.09L16.2,12.36V12.36C16.71,11.5 17,10.55 17,9.5C17,6.46 14.54,4 11.5,4C8.46,4 6,6.46 6,9.5C6,10.55 6.29,11.5 6.8,12.36V12.36M17.05,12.88L11.5,22L5.95,12.88V12.88C5.35,11.89 5,10.74 5,9.5C5,5.91 7.91,3 11.5,3C15.09,3 18,5.91 18,9.5C18,10.74 17.65,11.89 17.05,12.88V12.88Z" /></svg>${data.address}`;

    displayCurrentTemp(data.days[0]);

    let next15 = data.days;
    
    futureForecast.innerHTML  = '';
    next15.forEach(elm =>{

        if(elm.datetime == data.days[0].datetime){
            
        }else{
            const newDiv = document.createElement("div");
            newDiv.classList.add("futureElm");
            displayFutureTemp(newDiv, elm);
            futureForecast.append(newDiv);
        }
        
        
    });


}


function displayCurrentTemp(data){
    currentTemp.textContent = data.temp + 'F';
    feelsLike.innerHTML = `<h3>Feels like</h3> ${data.feelslike}`;
    humidity.innerHTML = `<h3>Humidity</h3> ${data.humidity}`;
    snow.innerHTML = `<h3>Snow</h3> ${data.snow}`;
    minTemp.innerHTML = `<h3>Min Temp</h3> ${data.feelslikemin}`;
    maxTemp.innerHTML = `<h3>Max Temp</h3> ${data.feelslikemax}`;
    windSpeed.innerHTML = `<h3>Wind Speed</h3> ${data.windspeed}`;

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

search('Abu dhabi');