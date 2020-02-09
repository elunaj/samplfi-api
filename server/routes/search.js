const express = require('express');
const router = express.Router();
const request = require('request');

const accessToken = 'BQD7ZsGre15MZcghKF73nA5HCIsoLuaetgYRH7Lf7Tj0iEBmvS7pS_voP95nc7ge_yPavKeye4JbTZmJ9h0';

router.get('/:query', (req, res) => {
  
  const userSearchInput = req.params.query;

  let BASE_URL = 'https://api.spotify.com/v1/search?';
  let FETCH_URL = BASE_URL + 'q=' + userSearchInput + '&type=track&limit=1';

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

