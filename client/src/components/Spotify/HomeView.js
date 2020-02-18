import React from 'react';
import UserInput from '../Spotify/UserInput';
import UserEmail from '../Spotify/UserEmail';
import TrackCollection from '../Spotify/TrackCollection';
import TrackDisplay from '../Spotify/TrackDisplay';
import TrackAnalysis from '../Spotify/TrackAnalysis';
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
			console.log('tracks', tracks)
			this.setState({
				userTracksCollection: [...tracks],
				fetchStatus: true
			})
		})
		.catch(err => console.log)
	}

	componentDidMount() {
		this.findUserTracks();

	}
	
	componentDidUpdate() {
		console.log('testing lifecycle')

		console.log(this.state.userTracksCollection)

	}

	render() {
		return (
			<div className="main">
				<UserEmail className="test"
					userEmail={this.props.email}
				
				/>
				<UserInput
	                handleSubmit={this.props.handleSubmit}
	                handleChange={this.props.handleChange}
              	/>
				<TrackDisplay
					artistName={this.props.artistName}
					albumName={this.props.albumName}
					albumUrl={this.props.albumImage.url}
					trackName={this.props.trackName}
					releaseDate={this.props.releaseDate}
					onButtonSubmit={this.props.onButtonSubmit}
					postAccess={this.props.postAccess}
				/>

				<TrackAnalysis
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

				{this.state.fetchStatus 
					? <TrackCollection 
						userTracksCollection={[...this.state.userTracksCollection]} 
						fetchStatus={this.state.fetchStatus}
						/>

					: null
				}

					 
			</div>
		);
	}
}


