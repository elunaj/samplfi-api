import React from 'react';

export default class UserInfo extends React.Component {
	
	render() {
		return (
			<div>
	          {`Hello ${this.props.email}, input a track below`}
			</div>
		);
	}
}
