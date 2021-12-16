import React, { useEffect, useState } from 'react';
import {
	GetServerSideProps,
	NextPage,
	InferGetServerSidePropsType
} from 'next';
import { useUser } from '../context/UserContext';

const Index: NextPage = ({
	userProps
}: InferGetServerSidePropsType<GetServerSideProps>) => {
	const [userData, setUserData] = useState(userProps);
	const { handleUserData, ...contextRest } = useUser();

	useEffect(() => {
		if (
			typeof userProps === 'object' &&
			Object.keys(userProps).length > 0
		) {
			handleUserData(userProps);
		}
	}, [handleUserData]);

	useEffect(() => {
		if (
			Object.keys(userProps).length <= 0 &&
			Object.keys(contextRest.userData).length > 0
		) {
			setUserData(contextRest.userData);
		}
	}, []);

	return (
		<div className='text-3xl font-bold underline'>
			Welcome to {userData.email}'s portfolio!
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch('http://localhost:3000/api/user');
	const data = await res.json();

	return { props: { userProps: data } };
};

export default Index;
