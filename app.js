const key = "676c10ce660ff0842ac7d7dfb7cb04cd";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const weatherIcon = document.querySelector(".weatherIcon")

async function CheckWeather(Area) {
    const response = await fetch(APIurl + Area + `&appid=${key}`);
    var data = await response.json();
    console.log(data);
    console.log(data.main);
    console.log(data.name);
    console.log(data.main.temp);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + " m/s";
    document.querySelector(".humidityValue").innerHTML = data.main.humidity + " %";

    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    } 
    else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){    
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Rnow"){
        weatherIcon.src = "images/snow.png"
    }
}

searchBtn.addEventListener("click",()=>{
    CheckWeather(searchBox.value.trim());
})








