const express = require('express');
const router = express.Router();
const request = require('request');

const accessToken = 'BQB13dsKccVdliEXN8hEHrxPyllmMc34mibnXNVxlHEsD6S5JghPuFIKmfpNj50xQgnqNqg6-_uB54T2-Aw';

router.get('/:query', (req, res) => {
  
  const userSearchInput = req.params.query;

  let BASE_URL = 'https://api.spotify.com/v1/search?';
  let FETCH_URL = BASE_URL + 'q=' + userSearchInput + '&type=track';

  request(FETCH_URL, {
    headers: {
      'Authorization': 'Bearer ' + accessToken
    }
  }, (error, response, body) => {
  	// console.log(response)
  	console.log(response.statusCode)
  })
  .pipe(res);
  
});

router.get('/analysis/:id', (req, res) => {

	const trackId = req.params.id;

	let ANALYSIS_URL = 'https://api.spotify.com/v1/audio-features/' + trackId;

	request(ANALYSIS_URL, {
	    headers: {
	      'Authorization': 'Bearer ' + accessToken
	    }
	}, (error, response, body) => {
	  	
	  })
	  .pipe(res);

});


module.exports = router;

