import React from 'react';
import { TextField, Input, Button, FormLabel, Grid, Form } from '@material-ui/core';
import './UserInput.css';


const UserInput = ({ handleSubmit, handleChange }) => {
	return (

		<form onSubmit={ handleSubmit } 
			noValidate autoComplete="off">
  			<TextField id="outlined-basic" 
  				label="Enter track title" 
  				variant="outlined" 
  				onChange={ handleChange } 
  			/>
		</form>

	);
}

export default UserInput;
