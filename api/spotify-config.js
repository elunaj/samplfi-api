const axios = require('axios');

function getSpotifyApiToken() {

  /*Spotify Client Credentials oAuth2 flow 
  to authenticate against the Spotify Accounts.*/

  // Spotify creds
  const client_id = process.env.CLIENT_ID; // Client id
  const client_secret = process.env.CLIENT_SECRET; // Secret

  return axios({
    method: 'post',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),        
    'Content-Type': 'application/x-www-form-urlencoded'
    },
    params: {
      grant_type: 'client_credentials'
    },
    json: true,
  })
    .then(body => {
      return body.data.access_token;
    })
    .catch(e => {
      console.log('error', e.response.data);
    });
};


module.exports = {
  getSpotifyApiToken
};