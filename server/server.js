require('dotenv').config({ path: '../.env'});

let createError = require('http-errors');
let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');
let request = require('request'); 
let spotify = require('./api/spotify-config');

let indexRouter = require('./routes/index');
let searchRouter = require('./routes/search');
let usersRouter = require('./routes/users');

let app = express();
const port = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);
app.use('/search', searchRouter);
app.use('/users', usersRouter);

// port
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
  const userToken = spotify.getSpotifyApiToken();
  console.log('userToken ', userToken);

});


module.exports = app;
