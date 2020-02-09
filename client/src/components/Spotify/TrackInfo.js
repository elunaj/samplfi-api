import React from 'react';

export default class TrackInfo extends React.Component {
	
	render() {
		return (
			<div>
	          {`Artist name is ${this.props.artistName}`}
	          {`Album name is ${this.props.albumName}`}
		          Album image 
		          	<img src={this.props.albumImage.url} 
		          	width='100px' 
		          	height='100px'/>
	           {`Track name is ${this.props.trackName}`}
	           {`Release date is ${this.props.releaseDate}`}
			</div>
		);
	}
}