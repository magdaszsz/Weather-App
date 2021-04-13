const fetch = require("node-fetch");

exports.handler = async(event, context) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const users = await fetch(url);
    const usersJson = await users.json();
    return {
      statusCode: 200, 
      body: JSON.stringify(usersJson)
    };
  } catch (err) {
    return {
      statusCode: 422, 
      body: err.stack
    };
  }
}