import React from 'react';
import { FormGroup, Label, Input, Message, Wrapper, Button } from "./RegisterForm";


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
			<Wrapper>
				<Message>Register</Message>
			    <FormGroup>
			      <Label htmlFor="email">Email</Label>
			      <Input 
			      	id="email" 
			      	type="email" 
			      	name="email"
			      	onChange={this.onEmailChange} 
			      	/>
			    </FormGroup>
			    <FormGroup>
			      <Label htmlFor="password">Password</Label>
			      <Input 
			      	id="password" 
			      	type="password" 
			      	name="password"
			      	onChange={this.onPasswordChange}
			      	/>
			      <Message>This is the validation message</Message>
			    </FormGroup>
			    <Button 
			    	onClick={this.onSubmitRegister}
			    	type="submit" 
			    	value="Register">
			    	Sign in
			    </Button>
		  	</Wrapper>
	);
	}

}

export default Register;