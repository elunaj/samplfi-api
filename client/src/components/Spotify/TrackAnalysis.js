import React from 'react';

export default class TrackAnalysis extends React.Component {
	
	render() {
		return (
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
		);
	}
}
