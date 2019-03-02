
const request = require('request');

request.get('https://awesome-page-fullstory.glitch.me/sentences.txt',
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    }
});
