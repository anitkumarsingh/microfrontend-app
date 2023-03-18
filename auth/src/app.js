import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import SignIn from './components/Signin';
import SignUp from './components/Signout';

const generateRandomClassname = createGenerateClassName({
	productionPrefix: 'auth'
});

const App = ({ history }) => {
	return (
		<>
			<StylesProvider generateClassName={generateRandomClassname}>
				<Router history={history}>
					<Switch>
						<Route path="/auth/signin" component={SignIn} />
						<Route path="/auth/signup" component={SignUp} />
					</Switch>
				</Router>
			</StylesProvider>
		</>
	);
};

export default App;
