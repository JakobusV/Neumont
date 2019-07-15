var weatherData;
var useCurrentTime;
var request = new XMLHttpRequest();
var date = new Date();

loadData();

function loadData() {
    
    request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?q=Utah,us&units=imperial&APPID=d2221aa05743accb3c8d1a0a0ca2d0dd');
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt) {
    weatherData = JSON.parse(request.responseText);
    console.log(weatherData);
    for (i = 0; i < 5; i++) {
        document.getElementById("place" + i).innerHTML = weatherData.city.name;
        document.getElementById("day" + i).innerHTML = (date.getMonth()+1) + "/" + (date.getDate()+ 1 + i);
        document.getElementById("currentTemp" + i).innerHTML = Math.round(weatherData.list[(date.getDate() + i)].main.temp) + "°";
        document.getElementById("conditions" + i).innerHTML = weatherData.list[(date.getDate() + i)].weather[0].main;
        document.getElementById("conditionsDesc" + i).innerHTML = weatherData.list[(date.getDate() + i)].weather[0].description;
    }
    for (i = 0; i < 5; i++) {
        switch (weatherData.list[(date.getDate() + i)].weather[0].main) {
            case "Clouds":
                document.getElementById("image" + i).src='Images/clouds-64.png';
                break;
            case "Clear":
                document.getElementById("image" + i).src='Images/sun-64.png';
                break;
            case "Snow":
                document.getElementById("image" + i).src='Images/snow-64.png';
                break;
            case "Rain":
                document.getElementById("image" + i).src='Images/rain-64.png';
                break;
            case "Drizzle":
                document.getElementById("image" + i).src='Images/little-rain-64.png';
                break;
            case "Thunderstorm":
                document.getElementById("image" + i).src='Images/storm-64.png';
                break;
            default:
                document.getElementById("image" + i).src='';
        }
    }
}