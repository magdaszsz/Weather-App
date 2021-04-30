const url = "/.netlify/functions/users";
const input = document.querySelector('input');
const div = document.querySelector('h3');
const btn = document.querySelector('button');
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
console.log(data)
showData(data);
}


 

function showData(data) {
  div.innerHTML = data.main.temp;
}

