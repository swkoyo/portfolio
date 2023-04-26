import { Stack, Text } from '@mantine/core';
import { ReactElement } from 'react';
import { TbError404 } from 'react-icons/tb';
import MainShell from '../components/layouts/MainShell';
import { NextPageWithLayout } from './_app';

const ErrorPage: NextPageWithLayout = () => {
	return (
		<Stack spacing={0} align='center'>
			<TbError404 size='10rem' />
			<Text size='2xl'>Page not found!</Text>
		</Stack>
	);
};

export default ErrorPage;

ErrorPage.getLayout = function getLayout(page: ReactElement) {
	return <MainShell>{page}</MainShell>;
};
