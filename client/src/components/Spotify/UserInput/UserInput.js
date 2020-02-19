import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './UserInput.css';


const UserInput = ({ handleSubmit, handleChange }) => {
	return (

		<form 
      style={{
        'margin-top': '3rem',
        'margin-bottom': '3rem'
      }}
      onSubmit={ handleSubmit } 
			noValidate autoComplete="off">
  			<TextField id="outlined-basic"
  				style={{
            width: '20rem'
          }} 
  				label="Enter track title" 
  				variant="outlined" 
  				onChange={ handleChange } 
  			/>
        <Button
          style={{
            height: '3rem',
            'margin-left': '2px',
            'margin-top': '3px'
          }}
          variant="contained" 
          onClick={ handleSubmit }
          onChange={ handleChange } 
          color="primary"
          >Search
        </Button>
		</form>

	);
}

export default UserInput;
