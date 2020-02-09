import React from 'react';
import { FormGroup, Label, Input, Message, Wrapper, Button } from "./RegisterForm";


const Register = ({ onRouteChange }) => {
	return (
		<Wrapper>
			<Message>Register</Message>
			 <FormGroup>
		      <Label htmlFor="name">Name</Label>
		      <Input id="name" type="text" name="name" />
		    </FormGroup>
		    <FormGroup>
		      <Label htmlFor="email">Email</Label>
		      <Input id="email" type="email" name="email" />
		    </FormGroup>
		    <FormGroup>
		      <Label htmlFor="password">Password</Label>
		      <Input id="password" type="password" name="password"/>
		      <Message>This is the validation message</Message>
		    </FormGroup>
		    <Button 
		    	onClick={() => onRouteChange('home')}
		    	type="submit" 
		    	value="Register">
		    	Sign in
		    </Button>
	  </Wrapper>
	);
}

export default Register;