import React, { useRef, useEffect } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

const AuthApp = () => {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		const {onParentContainerNavigate} = mount(ref.current, {
			onNavigate: ({ pathname: nextPathname }) => {
				const { pathname } = history.location;
				if (pathname !== nextPathname) {
					history.push(nextPathname);
				}
			}
		});
    history.listen(onParentContainerNavigate);
	}, []);
	return <div ref={ref}></div>;
};
export default AuthApp;
