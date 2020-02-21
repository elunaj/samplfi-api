import React from 'react';
import UserInput from '../Spotify/UserInput/UserInput';
import TrackDisplay from '../Spotify/TrackDisplay';
import TrackAnalysis from '../Spotify/TrackAnalysis';
import Spinner from '../Spinner/Spinner';
import { Typography } from '@material-ui/core';
import './HomeView/HomeView.css';


export default class HomeView extends React.Component {


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

              	 <Typography 
			 	style={{
			 		'margin': '-2rem 1rem',
			 		'marginBottom': '.5rem',
			 		'textDecoration': 'underline'

			 	}}
			 	variant="subtitle2">
			 	Register to save your tracks
			 	</Typography>

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

					 
			</div>
		);
	}
}


/*



*/

