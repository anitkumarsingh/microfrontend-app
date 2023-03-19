import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import LandingPage from './components/Landing';
import Pricing from './components/Pricing';

const generateRandomClassname = createGenerateClassName({
	productionPrefix: 'mar'
});

const App = ({ history }) => {
	return (
		<>
			<StylesProvider generateClassName={generateRandomClassname}>
				<Router history={history}>
					<Switch>
						<Route exact path='/' component={LandingPage} />
						<Route path='/pricing' component={Pricing} />
					</Switch>
				</Router>
			</StylesProvider>
		</>
	);
};

export default App;
