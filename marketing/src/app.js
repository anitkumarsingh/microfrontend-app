import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';
import LandingPage from './components/Landing';
import Pricing from './components/Pricing';

const App = () => {
	return (
		<>
			<StylesProvider>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={LandingPage} />
						<Route path='/pricing' component={Pricing} />
					</Switch>
				</BrowserRouter>
			</StylesProvider>
		</>
	);
};

export default App;
