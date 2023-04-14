import { useHash } from '@mantine/hooks';
import { useMemo } from 'react';
import { NAV } from '../constants';
import Error from '../views/Error';
import Home from '../views/Home';
import Projects from '../views/Projects';
import Resume from '../views/Resume';

export default function useCurrentView() {
	const [hash, setHash] = useHash();

	const currentView = useMemo(() => {
		if (!hash || hash === `#${NAV.HOME}`) {
			return {
				view: <Home />,
				value: NAV.HOME
			};
		} else if (hash === `#${NAV.PROJECTS}`) {
			return {
				view: <Projects />,
				value: NAV.PROJECTS
			};
		} else if (hash === `#${NAV.RESUME}`) {
			return {
				view: <Resume />,
				value: NAV.RESUME
			};
		} else {
			return {
				view: <Error />,
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
