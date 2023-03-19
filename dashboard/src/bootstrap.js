import Dashboard from './components/Dashboard.vue';
import {createApp} from 'vue';

const mount = (el) => {
	console.log('asdas');
	const app = createApp(Dashboard);
	app.mount(el);
};

// delelopment or production
if (process.env.NODE_ENV === 'development') {
	const findEl = document.querySelector('#dashboard-dev-root');
	if (findEl) {
		mount(findEl);
	}
}

//

export { mount };
