import React from 'react';
import { FormGroup, Label, Input, Message, Wrapper, Button } from "./SigninForm";


const Signin = ({ onRouteChange }) => {
	return (
		<Wrapper>
			<Message>Sign in</Message>
		    <FormGroup>
		      <Label htmlFor="email">Email</Label>
		      <Input id="email" type="text" name="email" />
		    </FormGroup>
		    <FormGroup>
		      <Label htmlFor="password">Password</Label>
		      <Input id="password" type="password" name="password"/>
		      <Message>This is the validation message</Message>
		    </FormGroup>
		    <Button 
		    	onClick={() => onRouteChange('home')}
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

export default Signin;