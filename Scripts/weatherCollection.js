var weatherData;
var listPos;
var request = new XMLHttpRequest();
var date = new Date();

loadData();

function loadData() {
    
    request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=5780993&units=imperial&APPID=d2221aa05743accb3c8d1a0a0ca2d0dd');
    request.onload = loadComplete;
    request.send();
}

var curHr = new Date().getHours();
if (0 < new Date().getMinutes()) {
    curHr++;
}
if (curHr == 24) {
    curHr = 0;
}

switch (curHr) {
    case 22:
    case 23:
    case 0:
        listPos = 3;
        break;
    case 1:
    case 2:
    case 3:
        listPos = 7;
        break;
    case 4:
    case 5:
    case 6:
        listPos = 7;
        break;
    case 7:
    case 8:
    case 9:
        listPos = 7;
        break;
    case 10:
    case 11:
    case 12:
        listPos = 7;
        break;
    case 13:
    case 14:
    case 15:
        listPos = 6;
        break;
    case 16:
    case 17:
    case 18:
        listPos = 5;
        break;
    case 19:
    case 20:
    case 21:
        listPos = 4;
        break;
    default:
        console.log("LIST POSITION BREAK");
}

function loadComplete(evt) {
    weatherData = JSON.parse(request.responseText);
    console.log(weatherData);
    for (i = 0; i < 5; i++) {
        document.getElementById("place" + i).innerHTML = "S.L.C.";
        document.getElementById("day" + i).innerHTML = (date.getMonth()+1) + "/" + (date.getDate()+ 1 + i);
        document.getElementById("currentTemp" + i).innerHTML = Math.round(weatherData.list[listPos + (i * 8)].main.temp) + "°";
        document.getElementById("conditions" + i).innerHTML = weatherData.list[listPos + (i * 8)].weather[0].main;
        document.getElementById("conditionsDesc" + i).innerHTML = weatherData.list[listPos + (i * 8)].weather[0].description;
    }
    for (i = 0; i < 5; i++) {
        switch (weatherData.list[listPos + (i * 8)].weather[0].main) {
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