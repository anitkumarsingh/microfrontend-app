import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, { onSignIn,onNavigate, defaultHistory, initialPath }) => {
	const history =
		defaultHistory ||
		createMemoryHistory({
			initialEntries: [initialPath]
		});
	if (onNavigate) {
		history.listen(onNavigate);
	}

	ReactDOM.render(<App history={history} onSignIn={onSignIn}/>, el);

	return {
		onParentContainerNavigate: ({ pathname: parentPathname }) => {
			const { pathname } = history.location;
			if (pathname !== parentPathname) {
				history.push(parentPathname);
			}
		}
	};
};

// delelopment or production
if (process.env.NODE_ENV === 'development') {
	const findEl = document.querySelector('#auth-dev-root');
	if (findEl) {
		mount(findEl, { defaultHistory: createBrowserHistory() });
	}
}

//

export { mount };
