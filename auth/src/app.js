import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import SignIn from './components/Signin';
import SignUp from './components/Signout';

const generateRandomClassname = createGenerateClassName({
	productionPrefix: 'auth'
});

const App = ({ history, onSignIn }) => {
	return (
		<>
			<StylesProvider generateClassName={generateRandomClassname}>
				<Router history={history}>
					<Switch>
						<Route path='/auth/signin'>
							<SignIn onSignIn={onSignIn} />
						</Route>
						<Route path='/auth/signup'>
							<SignUp onSignIn={onSignIn} />
						</Route>
					</Switch>
				</Router>
			</StylesProvider>
		</>
	);
};

export default App;
