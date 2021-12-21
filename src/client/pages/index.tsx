import React from 'react';
import { NextPage } from 'next';
import { useUserContext } from '../context/UserContext';

const Index: NextPage = () => {
	const { userData } = useUserContext();

	return (
		<div className='container mx-auto space-y-14 text-center'>
			<div className='text-8xl'>{userData.full_name.toUpperCase()}</div>
			<div className='text-2xl'>{userData.tagline}</div>
			<div>{userData.profile}</div>
		</div>
	);
};

export default Index;
