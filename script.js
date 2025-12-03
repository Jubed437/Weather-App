async function  fetchData() {
    let cityName = document.getElementById("cityValue").value;
    let fetchedData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=308bc645518c01f82fb25d217722f968&units=metric`);
    let formattedData = await fetchedData.json();
    let latitude = formattedData.coord.lat;
    let longitude = formattedData.coord.lon;
    let forecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=308bc645518c01f82fb25d217722f968&units=metric`)
    let formattedForecastData = await forecastData.json();
    let airpolData = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=308bc645518c01f82fb25d217722f968`)
    let formattedAirpolData = await airpolData.json();
    const weatherBackgrounds  = {
        'clouds' : "./images/cloudy.jpeg",
        'sunny' : "./images/sunny.jpg",
        'clear' : "./images/clear.jpg",
        'haze' : "./images/foggy.jpg",
        'mist': "./images/foggy.jpg",
        'smoke' : "./images/foggy.jpg",
        'rain': "./images/rainy.avif",
        'thunderstorm': "./images/thunderstorm.jpg"
    };
    let body = document.querySelector('body');
    let condition = formattedData.weather[0].main.toLowerCase();
    let matchedKey = Object.keys(weatherBackgrounds).find(key => condition.includes(key));
    let backgroundImage = weatherBackgrounds[matchedKey] || weatherBackgrounds.clear;
    body.style.backgroundImage = `url(${backgroundImage})`;


    $('#cityName')[0].innerText = formattedData.name;
    $('#temp')[0].innerText = formattedData.main.temp;
    $('#desc')[0].innerText = formattedData.weather[0].description;
    $('#desc')[0].innerText = formattedData.weather[0].description;
    $('#date')[0].innerText = dateConvert(formattedData.dt, formattedData.timezone);
    $('#time')[0].innerText = timeConvert(formattedData.dt, formattedData.timezone);
    
    $('#temp1')[0].innerText = formattedForecastData.list[8].main.temp;
    $('#temp2')[0].innerText = formattedForecastData.list[16].main.temp;
    $('#temp3')[0].innerText = formattedForecastData.list[24].main.temp;
    $('#temp4')[0].innerText = formattedForecastData.list[32].main.temp;
    $('#temp5')[0].innerText = formattedForecastData.list[39].main.temp;

    $('#day1')[0].innerText = getDay(formattedForecastData.list[8].dt)
    $('#day2')[0].innerText = getDay(formattedForecastData.list[16].dt)
    $('#day3')[0].innerText = getDay(formattedForecastData.list[24].dt)
    $('#day4')[0].innerText = getDay(formattedForecastData.list[32].dt)
    $('#day5')[0].innerText = getDay(formattedForecastData.list[39].dt)

    $('#date1')[0].innerText = formattedForecastData.list[8].dt_txt.split(" ")[0];
    $('#date2')[0].innerText = formattedForecastData.list[16].dt_txt.split(" ")[0];
    $('#date3')[0].innerText = formattedForecastData.list[24].dt_txt.split(" ")[0];
    $('#date4')[0].innerText = formattedForecastData.list[32].dt_txt.split(" ")[0];
    $('#date5')[0].innerText = formattedForecastData.list[39].dt_txt.split(" ")[0];

    $('#humidity-value')[0].innerText = formattedData.main.humidity;
    $('#pressure-value')[0].innerText = formattedData.main.pressure;
    $('#feels-like-value')[0].innerText = formattedData.main.feels_like;
    $('#visibility-value')[0].innerText = formattedData.visibility/1000;


    $('#co-value')[0].innerText = formattedAirpolData.list[0].components.co;
    $('#no2-value')[0].innerText = formattedAirpolData.list[0].components.no2;
    $('#o3-value')[0].innerText = formattedAirpolData.list[0].components.o3;
    $('#so2-value')[0].innerText = formattedAirpolData.list[0].components.so2;
    $('#aqi-status')[0].innerText = getAQIstatus(formattedAirpolData.list[0].main.aqi)

    

}
function dateConvert(timestamp, timezone){
    let dateObj = new Date(timestamp*1000 + timezone*1000);
    return dateObj.toISOString().split('T')[0];
}
function timeConvert(timestamp, timezone){
    let dateObj = new Date(timestamp*1000 + timezone*1000);
    console.log();
    return dateObj.toISOString().split('T')[1].split('.')[0]
}
function getDay(timestamp){
    let dayObj = new Date(timestamp*1000);
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[dayObj.getUTCDay()];
}

function getAQIstatus(value){
    switch(value)
    {
        case 1: $('#aqi-status')[0].style.color = 'green';
        return 'Good';
        case 2: $('#aqi-status')[0].style.color = 'green';
        return 'Fair';
        case 3: $('#aqi-status')[0].style.color = 'yellow';
        return 'Moderate';
        case 4: $('#aqi-status')[0].style.color = 'red';
        return 'Poor';
        case 5: $('#aqi-status')[0].style.color = 'red';
        return 'Very Poor';
    }
}




















