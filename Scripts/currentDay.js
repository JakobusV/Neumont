var weatherDataToday;
var requestToday = new XMLHttpRequest();
var dateToday = new Date();

loadDataToday();

function loadDataToday() {
    
    requestToday.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&APPID=ec7e0b6b1853dc27d717fe2036551663');
    requestToday.onload = loadCompleteToday;
    requestToday.send();
}

function loadCompleteToday(evt) {
    weatherDataToday = JSON.parse(requestToday.responseText);
    console.log(weatherDataToday);
    document.getElementById("placeT").innerHTML = "Today in " + weatherDataToday.name;
    document.getElementById("dayT").innerHTML = (date.getMonth()+1) + "/" + (date.getDate());
    document.getElementById("currentTempT").innerHTML = Math.round(weatherDataToday.main.temp) + "°";
    document.getElementById("conditionsT").innerHTML = weatherDataToday.weather[0].main;
    document.getElementById("conditionsDescT").innerHTML = weatherDataToday.weather[0].description;
    switch (weatherDataToday.weather[0].main) {
        case "Clouds":
            document.getElementById("imageT").src='Images/clouds-64.png';
            break;
        case "Clear":
            document.getElementById("imageT").src='Images/sun-64.png';
            break;
        case "Snow":
            document.getElementById("imageT").src='Images/snow-64.png';
            break;
        case "Rain":
            document.getElementById("imageT").src='Images/rain-64.png';
            break;
        case "Drizzle":
            document.getElementById("imageT").src='Images/little-rain-64.png';
            break;
        case "Thunderstorm":
            document.getElementById("imageT").src='Images/storm-64.png';
            break;
        default:
            document.getElementById("imageT").src='';
    }
}