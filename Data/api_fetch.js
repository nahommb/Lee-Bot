const axios = require('axios');


const fetch = async(name)=>{

 const options = {
  method: 'GET',
  url: 'https://youtube-mp3-downloader5.p.rapidapi.com/',
  params: {
    url: 'https://youtu.be/LvVz-hgTObk'
  },
  headers: {
    'X-RapidAPI-Key': '9ca95ca6c0msha5a9194b83ddbfcp12e67ejsn96209304ff2f',
    'X-RapidAPI-Host': 'youtube-mp3-downloader5.p.rapidapi.com'
  }
};  

try {
	const response = await axios.request(options);
     console.log(response.data)
    return response.data.title;
	
} catch (error) {
	console.error(error);
}
}


module.exports = fetch;