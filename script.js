let weather = {
    apiKey: '0a52fbc3303db03b035fd0cc54d89ad6',
    fetchWeather : function(city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+
        city 
        +"&units=metric&appid=" +
        this.apiKey
        )
        .then((response) => {
            if (!response.ok) {
                alert("No weather Found.");
                throw new Error("No weather Found");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
        
    },


    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector('.city').innerText = "Weather in " + name;
       console.log(data);

        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =
          "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
          "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
      },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
})

document.querySelector(".search-bar").addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        weather.search();
    }
    console.log("vayo");
})

weather.fetchWeather("Kathmandu");