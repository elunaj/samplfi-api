import React from 'react';
import UserInput from '../../Spotify/UserInput/UserInput';
import TrackCollection from '../../Spotify/TrackCollection/TrackCollection';
import TrackDisplay from '../../Spotify/TrackDisplay';
import TrackAnalysis from '../../Spotify/TrackAnalysis';
import Spinner from '../../Spinner/Spinner';
import { Typography } from '@material-ui/core';
import './HomeView.css';


export default class HomeView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fetchStatus: false,
			userTracksCollection: [],
			userId: this.props.userId

		}
	}

	findUserTracks = () => {
		fetch('http://localhost:5000/profile/' + this.state.userId, {
			method: 'get',
			headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
		    },
		})
		.then(response => { 
			if (!response.ok) {
				throw response;
			}
			return response.json()
		})
		.then(tracks => {
			this.setState({
				userTracksCollection: [...tracks],
				fetchStatus: true
			})
		})
		.catch(err => console.log)
	}

	//Handles user delete/remove button click in TrackCollection
	deleteTrack = (track, i) => {
	    fetch('http://localhost:5000/tracks/delete', {
	    method: 'delete',
	    headers: {'Content-Type': 'application/json'},
	    body: JSON.stringify({
	      track_id: track
	    })
	})
	    .then(response => response.json())
	    .then(deleteRes => {
	      const copyArray = Object.assign([], this.state.userTracksCollection);
	      copyArray.splice(i, 1);

	      this.setState({
	      	userTracksCollection: copyArray
	      })
	    })
	    .catch(console.log)
	
	}

	componentDidMount() {

		this.findUserTracks();


	}
	
	componentDidUpdate() {
		
		if (!this.state.fetchStatus) {
			this.findUserTracks();
		}

		if (this.props.newTrackAdded) {
			this.findUserTracks();
			this.props.setNewTrackAddedToFalse();
		}

	}

	render() {
		return (
			<div className="main">

			 <Typography 
			 	style={{
			 		'marginTop': '2.5rem',
			 		'display': 'block'
			 	}}
			 	variant="h3">Get Audio Analysis for your Music Sample
			 	</Typography>

			 <Typography 
			 	style={{
			 		'margin': '0 3rem'
			 	}}
			 	variant="subtitle1">
			 	The search feature conducts a low-level 
			 	analysis of tracks in the Spotify catalog. 
			 	The Audio Analysis describes the track’s structure and musical content, 
			 	including rhythm, pitch, and timbre. All information is precise to the 
			 	audio sample.
			 	</Typography>

				<UserInput
	                handleSubmit={this.props.handleSubmit}
	                handleChange={this.props.handleChange}
              	/>

              	{this.props.loading 
              		? 
              			<Spinner/>
              		: null }

              	{this.props.trackAnalysisFound

				?	<div>
						<TrackDisplay
							trackAnalysisFound={this.props.trackAnalysisFound}
							artistName={this.props.artistName}
							albumName={this.props.albumName}
							albumUrl={this.props.albumImage.url}
							trackName={this.props.trackName}
							releaseDate={this.props.releaseDate}
							onButtonSubmit={this.props.onButtonSubmit}
							postAccess={this.props.postAccess}
						/>

						<TrackAnalysis
							trackAnalysisFound={this.props.trackAnalysisFound}
							danceability={this.props.danceability}
							energy={this.props.energy}
							loudness={this.props.loudness}
							mode={this.props.mode}
							speechiness={this.props.speechiness}
							acousticness={this.props.acousticness}
							instrumentalness={this.props.instrumentalness}
							liveness={this.props.liveness}
							valence={this.props.valence}
							tempo={this.props.tempo}
						/>
					</div>
					
				 : null }

				<Typography 
			 	style={{
			 		'marginTop': '2.5rem',
			 		'display': 'block'
			 	}}
			 	variant="h4">Track Collection:
			 	</Typography>

		


				{this.state.fetchStatus 
					? <TrackCollection
						deleteTrack={this.deleteTrack}
						userTracksCollection={[...this.state.userTracksCollection]} 
						fetchStatus={this.state.fetchStatus}
						/>

					: null
				}

					 
			</div>
		);
	}
}


