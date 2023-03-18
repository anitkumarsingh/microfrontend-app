import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createMemoryHistory } from 'history';

const mount = (el) => {
	const history = createMemoryHistory();
	ReactDOM.render(<App history={history} />, el);
};

// delelopment or production
if (process.env.NODE_ENV === 'development') {
	const findEl = document.querySelector('#marketing-dev-root');
	if (findEl) {
		mount(findEl);
	}
}

//

export { mount };
