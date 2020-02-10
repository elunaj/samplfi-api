require('dotenv').config({ path: '../.env'});

const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const request = require('request'); 
const bodyParser = require('body-parser');
const spotify = require('./api/spotify-config');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'bacon';
const someOtherPlaintextPassword = 'veggies';


const searchRouter = require('./routes/search');
const usersRouter = require('./routes/users');

const database = {

	users: [
						{
			id: '123',
			name: 'John',
			email: 'john@gmail.com',
			trackList: ['21jGcNKet2qwijlDFuPiPb',
			'22oEJW6r2rMb9z4IntfyEa', '7qwt4xUIqQWCu1DJf96g2k'],
			tracks_saved: 0,
			joined: new Date()
		},
						{
			id: '124',
			name: 'Sally',
			email: 'sally@gmail.com',
			trackList: ['21jGcNKet2qwijlDFuPiPb',
			'21jGcNKet2qwijlDFuPiPb', '21jGcNKet2qwijlDFuPiPb'],
			tracks_saved: 0,
			joined: new Date()
		},
		{
			id: '1245',
			name: 'Elias',
			email: 'elias@gmail.com',
			password: 'hellohello',
			trackInfo: [{
				showArtistName: "Earl Sweatshirt",
				showTrackTitle: "Chum",
				showAlbumName: "Doris",
				showAlbumCover: "https://i.scdn.co/image/ab67616d0000b27346f9bf1154c7205b0e8b1667"
			},
			{
				showArtistName: "Post Malone",
				showTrackTitle: "Circles",
				showAlbumName: "Hollywood's Bleeding",
				showAlbumCover: "https://i.scdn.co/image/94105e271865c28853bfb7b44b38353a2fea45d6"
			},
			{
				showArtistName: "Green Day",
				showTrackTitle: "Chum",
				showAlbumName: "Dookie",
				showAlbumCover: "https://i.scdn.co/image/ab67616d0000b273db89b08034de626ebee6823d"
			}],
			tracksSaved: 3,
			joined: new Date()
		}
	],

	login: [
						{
			id: '987',
			hash: '',
			email: 'john@gmail.com'
		}
	]
}

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/search', searchRouter);
app.use('/users', usersRouter);

// api endpoints
app.get('/', (req, res) => {
 	res.json(database.users);
});

app.post('/signin', (req, res) => {
	 
	bcrypt.compare('apples', '$2b$10$heGnjwlRO0yfrCnKQo1u9.g50D9814us/xICwFi5NTrA.8nbn.0Xa', (err, result) => {
	    console.log('first guess', result)
	});
	bcrypt.compare('veggies', '$2b$10$heGnjwlRO0yfrCnKQo1u9.g50D9814us/xICwFi5NTrA.8nbn.0Xa', (err, result) => {
	    console.log('second guess', result)
	});

	if (req.body.email === database.users[2].email &&
		req.body.password === database.users[2].password) {
		res.json(database.users[2]);
	} else {
		res.status(400).json('error logging in');
	}
});

app.post('/register', (req, res) => {
	
	const { email, name, password } = req.body;

	bcrypt.hash(password, saltRounds, (err, hash) => {
  		// Store hash in your password DB.
  		console.log(hash);
	});
	
	database.users.push({
		id: '125',
		name: name,
		email: email,
		password: password,
		track_id: '21jGcNKet2qwijlDFuPiPb',
		tracks_saved: 0,
		joined: new Date()
	});

	res.json(database.users[database.users.length - 1]);

});

app.get('/profile/:id', (req, res) => {

	const { id } = req.params;
	let found = false;
	
	database.users.forEach(user => {
		if (user.id === id) {
			found = true;
			return res.json(user);
		} 
	});

	if (!found) {
		res.status(400).json('not found');
	}
});

app.post('/tracks', (req, res) => {

	const { id, artistName, trackName, albumName, albumImage } = req.body;
	let found = false;
	
	database.users.forEach(user => {
		if (user.id === id) {
			found = true;
			user.trackInfo.showArtistName = artistName;
            user.trackInfo.showTrackTitle = trackName;
            user.trackInfo.showAlbumName = albumName;
            user.trackInfo.showAlbumCover = albumImage;
            user.tracksSaved++;
			return res.json(user);
		} 
	});

	if (!found) {
		res.status(400).json('unsuccessful post');
	}
})

// port
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
  const userToken = spotify.getSpotifyApiToken();
  console.log('userToken ', userToken);
});


module.exports = app;
