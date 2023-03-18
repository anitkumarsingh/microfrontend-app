import React from 'react';
import MarketingApp from './conponents/MarketingApp';
import Header from './conponents/Header';
import {BrowserRouter} from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
		  <Header/>
			<MarketingApp />
		</BrowserRouter>
	);
};

export default App;
