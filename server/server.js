require('dotenv').config({ path: '../.env'});

const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const searchRouter = require('./routes/search');
const usersRouter = require('./routes/users');
const saltRounds = 10;
const myPlaintextPassword = 'bacon';
const someOtherPlaintextPassword = 'veggies';
const knex = require('knex');

//Database connection
const db = knex({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'Luna23',
    password : '',
    database : 'music-app'
  }
});

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
 	// res.json(database.users);
});

app.post('/signin', (req, res) => {
	 
	db.select('email', 'hash').from('login')
		.where('email', '=', req.body.email)
		.then(data => {
			bcrypt.compare(req.body.password, data[0].hash, (err, result) => {
				if(result) {
					return db.select('*').from('users')
						.where('email', '=', req.body.email)
						.then(user => {
							res.json(user[0])
						})
						.catch(err => res.status(400).json('unable to get user'))
				} else {
					res.status(400).json('wrong credentials')
				}
			})
		})
});

app.post('/register', (req, res) => {
	
	const { email, password } = req.body;

	const saltRounds = 10;

	bcrypt.hash(password, saltRounds, (err, hash) => {
  		// Store hash in your password DB.
  		console.log(hash);

	  	db.transaction(trx => {
			trx.insert({
				hash: hash,
				email: email
			})
			.into('login')
			.returning('email')
			.then(loginEmail => {
				return trx('users')
					.returning('*')
					.insert({
						email: loginEmail[0],
						joined: new Date()
					})
				.then(user => {
					res.json(user[0])
				})
			})
			.then(trx.commit)
			.catch(trx.rollback)
		})
		
	.catch(err => res.status(400).json('unable to register'));

	});

});

app.get('/profile/:id', (req, res) => {

	const { id } = req.params;
	
	db.select('*').from('users').where({
		id: id
	})
	.then(user => {
		if (user.length) {
			res.json(user[0]);
		} else {
			res.status(400).json('Not found')
		}
	})
	.catch(err => res.status(400).json('Error getting user'))

});

app.put('/tracks', (req, res) => {

	const { id, artistName, trackName, albumName, albumImage } = req.body;
	
	db('users').where('id', '=', id)
		.increment('trackssaved', 1)
		.returning('trackssaved')
		.then(tracksSaved => {
			res.json(tracksSaved[0]);
		})
		.catch(err => res.status(400).json('Unable to get count'))
	})
// 	database.users.forEach(user => {
// 		if (user.id === id) {
// 			found = true;
// 			console.log(user);
// 			user.trackInfo.push(
// 				user.trackInfo.showArtistName = artistName,
// 	            user.trackInfo.showTrackTitle = trackName,
// 	            user.trackInfo.showAlbumName = albumName,
// 	            user.trackInfo.showAlbumCover = albumImage,
// 	        );
			
//             user.tracksSaved++;
// 			return res.json(user);
// 		} 
// 	});

// })

// port
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});


module.exports = app;
