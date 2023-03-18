import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createMemoryHistory } from 'history';

const mount = (el, { onNavigate }) => {
	const history = createMemoryHistory();
	if (onNavigate) {
		history.listen(onNavigate);
	}

	ReactDOM.render(<App history={history} />, el);
};

// delelopment or production
if (process.env.NODE_ENV === 'development') {
	const findEl = document.querySelector('#marketing-dev-root');
	if (findEl) {
		mount(findEl, {});
	}
}

//

export { mount };
