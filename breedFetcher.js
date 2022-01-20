const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`${args[0]} is not found.`);
  } else if (error !== null) {
    console.log(error);
  }
  console.log(data[0]['description']);
});