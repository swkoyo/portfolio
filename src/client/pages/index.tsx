import React from 'react';
import { NextPage } from 'next';
import { useUserContext } from '../context/UserContext';

const Index: NextPage = () => {
	const { userData } = useUserContext();

	return (
		<div className='text-3xl font-bold underline'>
			Welcome to {userData.email}'s portfolio!
		</div>
	);
};

export default Index;
