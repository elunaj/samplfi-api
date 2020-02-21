
const dotenv = require('dotenv');
dotenv.config();
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const searchRouter = require('./routes/search');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const tracks = require('./controllers/tracks');

//Database connection
const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true

  }
});

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/search', searchRouter);

// api endpoints
app.get('/', (req, res) => {
 	res.json("Root!");
});

app.post('/signin', (req, res) => {
	signin.handleSignin(req, res, db, bcrypt);
});

app.post('/register', (req, res) => {
	register.handleRegister(req, res, db, bcrypt);
});

app.get('/profile/:id', (req, res) => {
	profile.handleProfileGet(req, res, db);
});

app.put('/tracks', (req, res) => {
	tracks.handleTracks(req, res, db);
});

app.delete('/tracks/delete', (req, res) => {
  tracks.handleTracksDelete(req, res, db);
})

// port
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});


module.exports = app;
