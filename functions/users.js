const fetch = require("node-fetch");

// exports.handler = async(event, context) => {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   try {
//     const users = await fetch(url);
//     const usersJson = await users.json();
//     return {
//       statusCode: 200, 
//       body: JSON.stringify(usersJson)
//     };
//   } catch (err) {
//     return {
//       statusCode: 422, 
//       body: err.stack
//     };
//   }
// }

const { KEY_WEATHER }  = process.env;


exports.handler = async(event, context) => {
  const cityData = JSON.parse(event.body);
   const { city } = cityData;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY_WEATHER}&units=metric`;
  try {
    const data = await fetch(url);
    console.log(data)
    const dataJson =  await data.json();
    return {
      statusCode: 200, 
      body: JSON.stringify(dataJson)
    };
  } catch (err) {
    return {
      statusCode: 422, 
      body: err.stack
    };
  }
} 


