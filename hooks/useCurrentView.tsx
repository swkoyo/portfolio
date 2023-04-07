import { useHash } from '@mantine/hooks';
import { useMemo } from 'react';
import { NAV } from '../constants';
import About from '../features/About';
import Experience from '../features/Experience';
import Projects from '../features/Projects';

export default function useCurrentView() {
	const [hash, setHash] = useHash();

	const currentView = useMemo(() => {
		if (!hash || hash === `#${NAV.ABOUT}`) {
			return {
				view: <About />,
				value: NAV.ABOUT
			};
		} else if (hash === `#${NAV.EXPERIENCE}`) {
			return {
				view: <Experience />,
				value: NAV.EXPERIENCE
			};
		} else if (hash === `#${NAV.PROJECTS}`) {
			return {
				view: <Projects />,
				value: NAV.PROJECTS
			};
		} else {
			return {
				view: <div>HI</div>,
				value: 'error'
			};
		}
	}, [hash]);

	const changeView = (view: NAV) => {
		setHash(view);
	};

	return {
		View: currentView.view,
		currentView: currentView.value,
		changeView
	};
}
