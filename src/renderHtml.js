import { 
    weatherAddress,
    weatherData,
    currentTemp,
    searchBtn,
    // futureForecast,
    tempDiv1,
    tempDiv2,
    tempDiv3,
    cards1,
    cards2,
    cards3,
    cards4,
    cards5
 } from "./query";
import { format } from 'date-fns';

function createTempDiv(data){
    tempDiv1.innerHTML = '';
    const topDiv = document.createElement("div");
    const middleDiv = document.createElement("div")
    const bottomDiv = document.createElement("div");

    topDiv.textContent = format(data.datetime, 'MMMMMM  dd');
    middleDiv.textContent = `${data.temp}\u00B0C`;
    bottomDiv.innerHTML = `max: ${data.feelslikemax}\u00B0C min: ${data.feelslikemin}\u00B0C`;

    tempDiv1.append(topDiv, middleDiv, bottomDiv);
}


function createFeelsDiv(data){
    tempDiv2.innerHTML = '';
    const topDiv = document.createElement("div");
    const middleDiv = document.createElement("div")
    const bottomDiv = document.createElement("div");

    topDiv.textContent = 'Feels like';
    middleDiv.textContent = `${data.feelslike}\u00B0C`;
    bottomDiv.textContent = data.description;

    tempDiv2.append(topDiv, middleDiv, bottomDiv);

}


function createWindDiv(data){
    tempDiv3.innerHTML = '';
    const topDiv = document.createElement("div");
    const middleDiv = document.createElement("div")
    const bottomDiv = document.createElement("div");

    topDiv.textContent = 'Wind';
    middleDiv.textContent = `${data.windspeed}KM/H`;
    bottomDiv.textContent = `Gusts: ${data.windgust}KM/H`;

    tempDiv3.append(topDiv, middleDiv, bottomDiv);
}


function createMiscInfo(data){
    
    cards1.innerHTML = `<p>UV Index</p>
                        <div>${data.uvindex}</div>`;

    cards2.innerHTML = `<p>Humidity</p>
                        <div>${data.humidity}%</div>`;
    
    cards3.innerHTML = `<p>Chance of Rain</p>
                        <div>${data.precipprob}%</div>`;

    cards4.innerHTML = `<p>Sunrise</p>
                        <div>${data.sunrise} AM</div>`;

    cards5.innerHTML = `<p>Sunset</p>
                        <div>${data.sunset} PM</div>`;


}





 export function displayCurrentTemp(data){
    createTempDiv(data);
    createFeelsDiv(data);
    createWindDiv(data);
    createMiscInfo(data);
}