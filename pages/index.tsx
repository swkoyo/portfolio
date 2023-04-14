import { Center, RingProgress, rem } from '@mantine/core';
import { useInterval, useTimeout } from '@mantine/hooks';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { TbCheck } from 'react-icons/tb';
import MainLogo from '../components/MainLogo';
import { NODE_ENV } from '../constants';
import MainShell from '../layouts/MainShell';

const Main: NextPage = () => {
	const [isLoading, setIsLoading] = useState<boolean>(
		NODE_ENV === 'production'
	);
	const [seconds, setSeconds] = useState(0);
	const interval = useInterval(() => setSeconds((s) => s + 1), 10);
	const { start, clear } = useTimeout(() => {
		setIsLoading(false);
		clear();
	}, 1000);

	useEffect(() => {
		interval.start();
	}, []);

	useEffect(() => {
		if (interval.active && seconds >= 100) {
			interval.stop();
			start();
		}
	}, [seconds, interval, start]);

	if (isLoading) {
		return (
			<Center h='100vh'>
				<RingProgress
					size={200}
					sections={[{ value: seconds, color: 'teal' }]}
					sx={{
						transform: seconds < 100 ? undefined : 'scale(2)',
						transition: 'all .3s ease-in-out'
					}}
					roundCaps
					label={
						<Center>
							{seconds < 100 ? (
								<MainLogo width={rem(70)} />
							) : (
								<TbCheck color='teal' size={rem(70)} />
							)}
						</Center>
					}
				/>
			</Center>
		);
	}

	return <MainShell />;
};

export default Main;
