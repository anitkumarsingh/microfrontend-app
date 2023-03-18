import React from 'react';
import MarketingApp from './conponents/MarketingApp';
import AuthApp from './conponents/AuthApp';
import Header from './conponents/Header';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const generateRandomClassname = createGenerateClassName({
	productionPrefix: 'co'
});

const App = () => {
	return (
		<StylesProvider generateClassName={generateRandomClassname}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/auth" component={AuthApp}/>
					<Route path="/" component={MarketingApp}/>
				</Switch>
				<MarketingApp />
			</BrowserRouter>
		</StylesProvider>
	);
};

export default App;
