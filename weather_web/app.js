let city = document.querySelector("#city");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");

const xhr = new XMLHttpRequest();
xhr.open("GET","http://api.openweathermap.org/data/2.5/weather?q=Kharkiv&appid=779222b5c67e8d3dfd38dae89311dd4f");
xhr.addEventListener("load",()=>{
  const response = JSON.parse(xhr.responseText)
  createForecast(response)
});

xhr.send();


function createForecast(response){
    wind.innerText = `Ветер ${response["wind"]["speed"]} мс`
    city.innerText = response["name"];
    temp.innerText = ` Температура ${Math.floor((response["main"]["temp"] - 32 )/18)} С`;
}