import { useHash } from '@mantine/hooks';
import { useMemo } from 'react';
import { NAV } from '../constants';
import Resume from '../features/Resume';
import Home from '../views/Home';

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
				view: <div />,
				value: NAV.PROJECTS
			};
		} else if (hash === `#${NAV.RESUME}`) {
			return {
				view: <Resume />,
				value: NAV.RESUME
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
