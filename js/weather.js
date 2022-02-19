const API_KEY = "33dcc03d3243f704c7fc4f5ff809719f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = `/ ${data.name} `;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

      if (weather === "snow") {
      } else if (weather === "rain") {
      }
    });
}
function onGeoError() {
  alert("위치가 읽혀지지 않습니다. 날씨를 알수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
