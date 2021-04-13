const url = "/.netlify/functions/users";

const div = document.querySelector('div')

const getData = async() =>  {
const response = await fetch(url);
const data = await response.json();
console.log(data)
}


 

getData()