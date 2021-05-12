const url = "/.netlify/functions/users";
const input = document.querySelector('input');
const temp = document.querySelector('.temp');
const city = document.querySelector('.city')
const desc = document.querySelector('.description')
const btn = document.querySelector('button');
const localTime = document.querySelector('.target__time')
let userInput = '';
let cityObj = {}


btn.addEventListener('click', function() {
  const userInput = input.value;
  cityObj = {
    city: userInput
  }
  getData();
});


const getData = async() =>  {
const response = await fetch(url, {
  method: "POST",
  body: JSON.stringify(cityObj)
});
const data = await response.json();
showData(data)
console.log(data)
 
}


 

function showData(data) {
  temp.innerHTML = `${Math.round(data.main.temp)} &deg;C`;
  desc.innerText = data.weather[0].description;
  city.innerHTML = `${data.name} <span class="country">${data.sys.country}</span>`;
  input.value = '';

  // const da = new Date().toISOString().split('T')[1].slice(0,5);
  const off = data.timezone;
  const offset = off / 60 / 60;
 
 const targetTime = new Date(new Date().getTime() + offset * 3600 * 1000)
   .toUTCString()
   .replace(/ GMT$/, "");
   const targetT = targetTime.slice(17);
   console.log(targetT)
  localTime.innerHTML = `<small>${targetTime.slice(0, 16)}</small>`
 
}

