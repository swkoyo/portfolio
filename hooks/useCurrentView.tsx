import { useHash } from '@mantine/hooks';
import About from '../features/About';
import Experience from '../features/Experience';
import Projects from '../features/Projects';
import { useMemo } from 'react';

export default function useCurrentView() {
	const [hash, setHash] = useHash();

	const currentView = useMemo(() => {
		if (!hash || hash === '#about') {
			return {
				view: <About />,
				value: 'about'
			};
		} else if (hash === '#experience') {
			return {
				view: <Experience />,
				value: 'experience'
			};
		} else if (hash === 'projects') {
			return {
				view: <Projects />,
				value: 'projects'
			};
		} else {
			return {
				view: <div>HI</div>,
				value: 'error'
			};
		}
	}, [hash]);

	const changeView = (view: string) => {
		setHash(view);
	};

	return {
		View: currentView.view,
		currentView: currentView.value,
		changeView
	};
}
