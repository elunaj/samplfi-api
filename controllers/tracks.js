const handleTracks = (req, res, db) => {

	const { id, artistName, trackName, albumName, albumImage } = req.body;

	db('tracks')
		.insert({
			user_id: id,
			artist_name: artistName,
			track_title: trackName,
			album_name: albumName,
			album_cover_url: albumImage.url
		})
		.returning('*')
		.then(result => {
			console.log(result)
			res.json(result[0]);
		})
		.catch(err => res.status(400).json('Unable to post tracks'));
}

const handleTracksDelete = (req, res, db) => {

	const { track_id } = req.body;

	db.select('*').from('tracks')
		.where('track_id', '=', track_id)
		.then(response => {
			if (response.length) {
				db('tracks')
					.del()
					.where('track_id', track_id)
					.returning('*')
					.then(response => {
						if (response) {
							res.json('successful delete')
						} else {
							res.json('unsuccessful delete')
						}
					})
			} else {
				res.status(400).json('record not found');
			}
		})
}

module.exports = {
	handleTracks: handleTracks,
	handleTracksDelete: handleTracksDelete
}
