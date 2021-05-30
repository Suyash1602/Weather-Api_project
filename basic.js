console.log("Connected");
// a4b619f28adfcdb7da23d0d6e60157a1

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var country = document.querySelector('#country')
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

var min = document.querySelector(".min");
var max = document.querySelector(".max");

var humidity = document.querySelector(".humidity");
var lonLat = document.querySelector(".lonLat");


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=a4b619f28adfcdb7da23d0d6e60157a1')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var countryVal = data['sys']['country'];
  var minVal = data['main']['temp_min'];
  var maxVal = data['main']['temp_max'];
  var humidityVal = data['main']['humidity'];



  tempValue = Math.round(tempValue - 273.15);
  minVal = Math.round(minVal - 273.15);
  maxVal = Math.round(maxVal - 273.15);

  min.innerHTML = minVal;
  max.innerHTML = maxVal;

  humidity.innerHTML = "Humidity = "+humidityVal+"g.m-3";
  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = "Temp = "+tempValue +" &deg Celsius";
  country.innerHTML = "Country ="+countryVal
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=a4b619f28adfcdb7da23d0d6e60157a1')
.then(response => response.json())
.then(data => console.log(data))

.catch(err => alert("Wrong city name!"));
})