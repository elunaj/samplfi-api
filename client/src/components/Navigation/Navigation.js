import React from 'react';
import { Grid, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import './Navigation.css';


const Navigation = ( { onRouteChange, isSignedIn, email }) => {
		if(isSignedIn) {
			return (

				<AppBar position="static">
				  <Toolbar>
				    <Typography 
				    	variant="h6">
				      KnowYourSample
				    </Typography>
				    
				    <Grid 
						container
						direction="row"
						alignItems = 'center'
						justify="flex-end"
						>	
						 <Typography 
						 	style={{
						 		'color': 'black',

						 	}}>
						 	{email}
				    	</Typography>

						 <Typography 
						 	style={{'margin-left': '5px'}}
					    	variant="h6">
					      ||
				    	</Typography>
				    			    
					    <Button 
					    	color="inherit"
					    	onClick={() => onRouteChange('signout')}
					    	>Sign out
					    </Button>
				    </Grid>
				  </Toolbar>
				</AppBar>

			);
		} else {
			return (

				<AppBar position="static" className="MuiAppBar-colorPrimary">
				  <Toolbar>
				    <Typography variant="h6">
				      KnowYourSample
				    </Typography>


				    <Grid 
						container
						direction="row"
						alignItems = 'flex-end'
						justify="flex-end"
						>				    
				    <Button 
				    	color="inherit"
				    	onClick={() => onRouteChange('signin')}
				    	>Sign In
				    </Button>
				    <Button 
				    	color="inherit"
				    	onClick={() => onRouteChange('register')}
				    	>Register
				    </Button>
				      <Button 
				    	color="inherit"
				    	onClick={() => onRouteChange('demo')}
				    	>Demo
				    </Button>
				    </Grid>
				  </Toolbar>
				</AppBar>

			);
		}
	
}

export default Navigation;


/*
<Typography 
				    	variant="h6">
				      {' '} |
				    </Typography>
				     <Typography 
				    	style={{'color': 'black'}}
				    	variant="h6">
				      {' '} |
				    </Typography>
				    <Typography 
				    	style={{
				    		'color': 'black',
				    		'font-size': '1rem'
				    	}}
				    	variant="h6">
				      {' '} {email}
				    </Typography>



*/