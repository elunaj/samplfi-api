import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
	background-color: #282c34;
	min-height: 25vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const Link = styled.p`
	font-size: calc(10px + 2vmin);
	margin: 2rem;
`;


const Navigation = ( { onRouteChange, isSignedIn }) => {
		if(isSignedIn) {
			return (
				<Nav>
					<Link 
						href=""
						onClick={() => onRouteChange('signout')}
						>Sign Out
					</Link>
				</Nav>
			);
		} else {
			return (
				<Nav>
					<Link 
						href=""
						onClick={() => onRouteChange('signin')}
						>Sign In
					</Link>
					<Link 
						href=""
						onClick={() => onRouteChange('register')}
						>Register
					</Link>
				</Nav>

			);
		}
	
}

export default Navigation;