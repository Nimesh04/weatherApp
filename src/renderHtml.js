import { 
    weatherAddress,
    weatherData,
    currentTemp,
    searchBtn,
    futureForecast,
    tempDiv1,
    tempDiv2,
    tempDiv3
 } from "./query";


function createTempDiv(data){
    tempDiv1.innerHTML = '';
    const topDiv = document.createElement("div");
    const middleDiv = document.createElement("div")
    const bottomDiv = document.createElement("div");

    topDiv.textContent = data.datetime;
    middleDiv.textContent = data.temp;
    bottomDiv.innerHTML = `max: ${data.feelslikemax} min: ${data.feelslikemin}`;

    tempDiv1.append(topDiv, middleDiv, bottomDiv);
}


function createFeelsDiv(data){
    tempDiv2.innerHTML = '';
    const topDiv = document.createElement("div");
    const middleDiv = document.createElement("div")
    const bottomDiv = document.createElement("div");

    topDiv.textContent = 'Feels like';
    middleDiv.textContent = data.feelslike;
    bottomDiv.textContent = data.description;

    tempDiv2.append(topDiv, middleDiv, bottomDiv);

}


function createWindDiv(data){
    tempDiv3.innerHTML = '';
    const topDiv = document.createElement("div");
    const middleDiv = document.createElement("div")
    const bottomDiv = document.createElement("div");

    topDiv.textContent = 'Wind';
    middleDiv.textContent = data.windspeed;
    bottomDiv.textContent = `Gusts: ${data.windgust}`;

    tempDiv3.append(topDiv, middleDiv, bottomDiv);
}

 export function displayCurrentTemp(data){
    currentTemp.textContent = data.temp + 'F';
    createTempDiv(data);
    createFeelsDiv(data);
    createWindDiv(data);
}