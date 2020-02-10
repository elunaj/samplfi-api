import React from 'react';

const UserInput = ({ handleSubmit, handleChange }) => {
	return (
		<form onSubmit={ handleSubmit }>
	        <label>
	          Name:
	          <input type="text" onChange={handleChange} />
	        </label>
	        <input type="submit" value="Submit" />
		</form>
	);
}

export default UserInput