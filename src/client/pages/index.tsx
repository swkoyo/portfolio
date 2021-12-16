import React from 'react';
import { NextPage } from 'next';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Index: NextPage = () => {
	const { userData } = useContext(UserContext);

	return (
		<div className='text-3xl font-bold underline'>
			Welcome to {userData.email}'s portfolio!
		</div>
	);
};

export default Index;
