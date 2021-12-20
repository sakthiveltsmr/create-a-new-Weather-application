let city = document.querySelector(".city");
let search = document.querySelector(".search");
let Time = document.querySelector(".time");
let area = document.querySelector("#area");
let weather = document.querySelector("#wState");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
console.log(city);

search.addEventListener("click", function () {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=367261ea67167733e6e17d88b7110e22`;
  fetch(url)
    .then((result) => result.json())
    .then((detail) => {
      let datetime = new Date().toDateString();
      let cityname = detail.name;
      let weatherstate = detail.weather[0].main;
      let temperature = Math.floor(detail.main.temp);
      let windspeed = detail.wind.speed;
      Time.innerHTML = datetime;
      area.innerHTML = cityname;
      if (weatherstate === "Clouds") src = "pic/icon.png";
      else if (weatherstate === "Rain") src = "pic/rain.png";
      else src = "pic/sunny.png";
      weather.innerHTML = `${weatherstate}<img class="cloud" src=${src}>`;
      temp.innerHTML = `${temperature - 273}&#176;C`;
      wind.innerHTML = `${windspeed},Kmph`;
      console.log(cityname);
      console.log(weatherstate);
      console.log(temperature);
      console.log(windspeed, "kmph");
    })
    .catch((err) => alert("wrong city name"));
});
