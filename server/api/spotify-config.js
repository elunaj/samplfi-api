const request = require('request'); 

const getSpotifyApiToken = () => {

  /*Spotify Client Credentials oAuth2 flow 
  to authenticate against the Spotify Accounts.*/

  // Spotify creds
  const client_id = process.env.CLIENT_ID; // Client id
  const client_secret = process.env.CLIENT_SECRET; // Secret

  // application requests authorization
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret)
        .toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // use the access token to access the Spotify Web API
      token = body.access_token;
      console.log(token)
    } else {
      console.log(error);

    }
  });

}


module.exports.getSpotifyApiToken = getSpotifyApiToken;