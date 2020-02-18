import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText, 
	Form, FormLabel, Grid, Button, Card } from '@material-ui/core';


class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		}
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onSubmitRegister = () => {
		fetch('http://localhost:5000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				console.log('register user', user)
				this.props.loadUser(user);
				this.props.onRouteChange('home');

			}
		})
	}

	render() {

		return (

			<div>
				<Card className="Card">
					<Grid container spacing={4}>

						<Grid item xs={12}>
							<FormLabel>Register</FormLabel>
						</Grid>

						<Grid item xs={12}>
							<FormControl>
							  <InputLabel htmlFor="email">Email address</InputLabel>
							  <Input 
							  	id="email" 
						      	type="email" 
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
							    	onClick={this.onSubmitRegister}
							    	type="submit" 
							    	value="Sign UP"
							    	>Sign UP
							    </Button>
							</FormControl>
						</Grid>

					</Grid>
				</Card>
			  </div>
		);
	}

}

export default Register;