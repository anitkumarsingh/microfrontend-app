import React, { lazy, Suspense, useState, useEffect } from 'react';
import Header from './conponents/Header';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import ProgressBar from './conponents/Progress';
import { createBrowserHistory } from 'history';

const LazyMarketingApp = lazy(() => import('./conponents/MarketingApp'));
const LazyAuthApp = lazy(() => import('./conponents/AuthApp'));
const LazyDashboardApp = lazy(() => import('./conponents/Dashboard'));

const generateRandomClassname = createGenerateClassName({
	productionPrefix: 'co'
});

const history = createBrowserHistory();

const App = () => {
	const [isSignIn, setIsSignIn] = useState(false);

	useEffect(() => {
		if (isSignIn) {
			history.push('/dashboard');
		}
	}, [isSignIn]);

	return (
		<StylesProvider generateClassName={generateRandomClassname}>
			<Router history={history}>
				<Header isSignIn={isSignIn} onSignOut={() => setIsSignIn(false)} />
				<Switch>
					<Suspense fallback={<ProgressBar />}>
						<Route path='/auth'>
							<LazyAuthApp onSignIn={() => setIsSignIn(true)} />
						</Route>

						<Route path='/dashboard'>
							{!isSignIn && <Redirect to='/' />}
							<LazyDashboardApp />
						</Route>

						<Route path='/' component={LazyMarketingApp} />
					</Suspense>
				</Switch>
			</Router>
		</StylesProvider>
	);
};

export default App;
