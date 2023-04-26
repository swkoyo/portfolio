import { ReactElement } from 'react';
import MainShell from '../components/layouts/MainShell';
import { NextPageWithLayout } from './_app';

const ResumePage: NextPageWithLayout = () => {
	return (
		<iframe
			width='100%'
			height='100%'
			src='/resume.pdf'
			content='application/pdf'
			allowFullScreen
		/>
	);
};

export default ResumePage;

ResumePage.getLayout = function getLayout(page: ReactElement) {
	return <MainShell>{page}</MainShell>;
};
