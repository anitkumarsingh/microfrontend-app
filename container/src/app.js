import React,{lazy,Suspense} from 'react';
import Header from './conponents/Header';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import ProgressBar from './conponents/Progress';


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
					<Suspense fallback={<ProgressBar/>}>
					<Route path="/auth" component={lazyAuthApp}/>
					<Route path="/" component={lazyMarketingApp}/>
					</Suspense>
				</Switch>
			</BrowserRouter>
		</StylesProvider>
	);
};

export default App;
