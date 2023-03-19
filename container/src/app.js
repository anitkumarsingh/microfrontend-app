import React,{lazy,Suspense} from 'react';
import Header from './conponents/Header';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';

const lazyMarketingApp = lazy(()=>import('./conponents/MarketingApp'));
const lazyAuthApp = lazy(()=>import('./conponents/AuthApp'));

const generateRandomClassname = createGenerateClassName({
	productionPrefix: 'co'
});

const App = () => {
	return (
		<StylesProvider generateClassName={generateRandomClassname}>
			<BrowserRouter>
				<Header />
				<Switch>
					<Suspense fallback={<h1>Loading...</h1>}>
					<Route path="/auth" component={lazyAuthApp}/>
					<Route path="/" component={lazyMarketingApp}/>
					</Suspense>
				</Switch>
			</BrowserRouter>
		</StylesProvider>
	);
};

export default App;
