const express = require('express');
const router = express.Router();
const spotifyApi = require('../api/spotify-config');
const axios = require('axios');

router.get('/:query', (req, res) => {


 spotifyApi.getSpotifyApiToken()
  .then(data => {

        let userSearchInput = req.params.query;

        let accessToken = data;

        let BASE_URL = 'https://api.spotify.com/v1/search?';
        let FETCH_URL = BASE_URL + 'q=' + userSearchInput + '&type=track';

        axios({
          method: 'get',
          url: FETCH_URL,
          headers: {
              'Authorization': 'Bearer ' + accessToken
          }
        })
        .then(response => {
          res.json(response.data);
        })
        .catch(error => {
          console.log('error ', error);
        })

  })
  .then(err => console.log('query error: ' ,err));
   
});

router.get('/analysis/:id', (req, res) => {

  spotifyApi.getSpotifyApiToken()
    .then(data => {

        let trackId = req.params.id;

        let ANALYSIS_URL = 'https://api.spotify.com/v1/audio-features/' + trackId;

        let accessToken = data;

        axios({
          method: 'get',
          url: ANALYSIS_URL,
          headers: {
              'Authorization': 'Bearer ' + accessToken
          }
        })
        .then(response => {
          res.json(response.data);
        })
        .catch(error => {
          console.log('error ' ,error);
        })

    })
    .then(err => console.log('analysis error', err));


});


module.exports = router;

