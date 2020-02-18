import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText, 
	Form, FormLabel, Grid, Button, Card } from '@material-ui/core';
import './Signin.css';


class Signin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: "",
			signInPassword: ""
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignin = () => {
		fetch('http://localhost:5000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				console.log('sign in user', user)
				this.props.loadUser(user);
				this.props.onRouteChange('home');
			}
		})
	}

	render() {

		const { onRouteChange } = this.props;

		return (
				<div>
					<Card className="Card">
						<Grid container spacing={4}>

							<Grid item xs={12}>
								<FormLabel>Sign in</FormLabel>
							</Grid>

							<Grid item xs={12}>
								<FormControl>
								  <InputLabel htmlFor="email">Email address</InputLabel>
								  <Input 
								  	id="email" 
								  	type="text"
								  	name="email"
								  	aria-describedby="my-helper-text"
								  	onChange={this.onEmailChange} 
								   />
								  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
								</FormControl>
							</Grid>

							<Grid item xs={12}>
								<FormControl>
								  <InputLabel htmlFor="password">Password</InputLabel>
								  <Input 
								  	id="password" 
							      	type="password" 
							      	name="password"
							      	aria-describedby="my-helper-text"
							      	onChange={this.onPasswordChange}
								  	/>
								  <FormHelperText id="my-helper-text">We'll never share your password.</FormHelperText>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl>
									 <Button 
									 	variant="outlined" 
								    	onClick={this.onSubmitSignin}
								    	type="submit" 
								    	value="Sign in"
								    	>Sign in
								    </Button>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl>
								    <Button
								    	variant="outlined" 
								    	onClick={() => onRouteChange('register')}
								    	>Register
								    </Button>
							    </FormControl>
						  </Grid>
					</Grid>
				</Card>
			  </div>

			);
		}
	}

export default Signin;