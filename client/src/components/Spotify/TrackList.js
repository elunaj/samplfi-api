import React from 'react';

export default class UserInfo extends React.Component {
	
	render() {

		console.log(this.props.trackInfo)

		return (
			<div>
			{`Your track count is... ${this.props.tracksSaved}`}
			 	{/*{this.props.trackInfo.map( (track, i) => {
			 			return (
			 				<div key={i}>
			 				<li>{track.showArtistName}</li>
			 				<li>{track.showTrackTitle}</li>
			 				<li>{track.showAlbumName}</li>
			 				<img 
			 					src={track.showAlbumCover} 
			 					width="100"
			 					height="100"/>

			 				</div>
			 			)
			 		})
			 	}
			 	*/}
			</div>
		);
	}
}
