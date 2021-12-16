import React from 'react';
import { NextPage } from 'next';
import { useUserContext } from '../context/UserContext';

const Index: NextPage = () => {
	const { userData } = useUserContext();

	return (
		<div className='container mx-auto'>
			<div className='text-center text-8xl'>
				{userData.first_name.toUpperCase()}{' '}
				{userData.last_name.toUpperCase()}
			</div>
			<div className='text-center text-2xl'>{userData.tagline}</div>
			<div className='mt-8 text-center'>{userData.profile}</div>
		</div>
	);
};

export default Index;
