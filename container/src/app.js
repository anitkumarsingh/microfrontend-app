import React, { lazy, Suspense, useState } from 'react';
import Header from './conponents/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import ProgressBar from './conponents/Progress';

const LazyMarketingApp = lazy(() => import('./conponents/MarketingApp'));
const LazyAuthApp = lazy(() => import('./conponents/AuthApp'));

const generateRandomClassname = createGenerateClassName({
	productionPrefix: 'co'
});

const App = () => {
	const [isSignIn, setIsSignIn] = useState(false);
	return (
		<StylesProvider generateClassName={generateRandomClassname}>
			<BrowserRouter>
				<Header isSignIn={isSignIn} onSignOut={() => setIsSignIn(false)} />
				<Switch>
					<Suspense fallback={<ProgressBar />}>
						<Route path='/auth'>
							<LazyAuthApp onSignIn={() => setIsSignIn(true)} />
						</Route>
						<Route path='/' component={LazyMarketingApp} />
					</Suspense>
				</Switch>
			</BrowserRouter>
		</StylesProvider>
	);
};

export default App;
