import React from 'react';
import { TextField, Button } from '@material-ui/core';


const UserInput = ({ handleSubmit, handleChange }) => {
	return (

		<form 
      style={{
        'marginTop': '3rem',
        'marginBottom': '3rem'
      }}
      onSubmit={ handleSubmit } 
			noValidate autoComplete="off">
  			<TextField id="outlined-basic"
  				className="textfield"
  				label="Enter track title" 
  				variant="outlined" 
  				onChange={ handleChange } 
  			/>
        <Button
          style={{
            height: '3rem',
            'marginLeft': '2px',
            'marginTop': '3px'
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
