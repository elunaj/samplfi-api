import React from 'react';
import { FormGroup, Label, Input, Message, Wrapper, Button } from "./SigninForm";


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
				<Wrapper>
					<Message>Sign in</Message>
				    <FormGroup>
				      <Label htmlFor="email">Email</Label>
				      <Input 
				      	id="email" 
				      	type="text" 
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
				    	onClick={this.onSubmitSignin}
				    	type="submit" 
				    	value="Sign in">
				    	Sign in
				    </Button>
				    <Button
				    	onClick={() => onRouteChange('register')}>
				    	Register
				    </Button>
			  </Wrapper>
			);
		}
	}

export default Signin;