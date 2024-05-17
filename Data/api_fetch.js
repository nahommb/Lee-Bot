const axios = require('axios');

// var response = ['messi'];
const options = {
  method: 'GET',
  url: 'https://instagram-scraper-2022.p.rapidapi.com/ig/music_search/',
  params: {name: 'efrem'},
  headers: {
    'X-RapidAPI-Key': '9ca95ca6c0msha5a9194b83ddbfcp12e67ejsn96209304ff2f',
    'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
  }
};
const fetch = async()=>{
    try {
	response = await axios.request('https://api.github.com/users');

     console.log(response.data[0].login);
    return response.data[0].login;
	
} catch (error) {
	console.error(error);
}
}


module.exports = fetch;