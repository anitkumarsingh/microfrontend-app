import React from 'react';
import MarketingApp from './conponents/MarketingApp';
import Header from './conponents/Header';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const generateRandomClassname = createGenerateClassName({
	productionPrefix: 'co'
});

const App = () => {
	return (
		<StylesProvider generateClassName={generateRandomClassname}>
			<BrowserRouter>
				<Header />
				<MarketingApp />
			</BrowserRouter>
		</StylesProvider>
	);
};

export default App;
