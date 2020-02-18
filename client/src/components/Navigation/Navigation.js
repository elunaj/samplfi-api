import React from 'react';
import { Grid, AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import './Navigation.css';


const Navigation = ( { onRouteChange, isSignedIn }) => {
		if(isSignedIn) {
			return (

				<AppBar position="static">
				  <Toolbar>
				    <Typography variant="h6">
				      KnowYourSample
				    </Typography>
				    <Button 
				    	color="inherit"
				    	onClick={() => onRouteChange('signout')}
				    	>Sign out
				    </Button>
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
				  </Toolbar>
				</AppBar>

			);
		}
	
}






export default Navigation;