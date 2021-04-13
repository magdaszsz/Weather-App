const url = "/.netlify/functions/users";

const div = document.querySelector('div')

const getData = async() =>  {
const response = await fetch(url);
const data = await response.json();
renderUser(data)
}


 const renderUser = (users) => {
  const usersString = users.map(element => {
    return `<p>${element.name}</p>`
  }).join("");
  div.innerHTML = usersString;
 }

getData()