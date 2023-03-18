import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

const MarketingApp = () => {
	const ref = useRef(null);
	const history = useHistory();
	useEffect(() => {
		mount(ref.current, {
			onNavigate: ({ pathname: nextPathname }) => {
				const { pathname } = history.location;
				if (pathname !== nextPathname) {
					history.push(nextPathname);
				}
			}
		});
	}, []);
	return <div ref={ref}></div>;
};
export default MarketingApp;
