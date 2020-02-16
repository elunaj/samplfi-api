import React from 'react';
import UserInput from '../Spotify/UserInput';

export default class TrackInfo extends React.Component {
	
	componentDidMount() {


	}
	
	componentDidUpdate() {
		console.log('testing lifecycle')

	}

	render() {
		return (
			<div>
				<div>
					{`Hello ${this.props.email}`}
				</div>
				<div>
					{`Your track count is... ${this.props.tracksSaved}`}
				</div>
				<UserInput
	                handleSubmit={this.props.handleSubmit}
	                handleChange={this.props.handleChange}
              	/>
				<div>
		          {`Artist name is ${this.props.artistName}`}
		          {`Album name is ${this.props.albumName}`}
			          Album image 
			          	<img src={this.props.albumImage.url} 
			          	width='100px' 
			          	height='100px'/>
			          	 <button 
			          	 	onClick={this.props.onButtonSubmit}
			          	 	disabled={!this.props.postAccess}
			          	 	>Post</button>
		           {`Track name is ${this.props.trackName}`}
		           {`Release date is ${this.props.releaseDate}`}
				</div>

				<div>
		          {`Danceability is ${this.props.danceability}`}
		          {`energy is ${this.props.energy}`}
		          {`loudness is ${this.props.loudness}`}
		          {`mode is ${this.props.mode}`}
		          {`speechiness is ${this.props.speechiness}`}
		          {`acousticness is ${this.props.acousticness}`}
		          {`instrumentalness is ${this.props.instrumentalness}`}
		          {`liveness is ${this.props.liveness}`}
		          {`valence is ${this.props.valence}`}
		          {`tempo is ${this.props.tempo}`}		
				</div>
			</div>
		);
	}
}