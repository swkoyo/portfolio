import React, { useState } from 'react';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useUserContext } from '../context/UserContext';
import { useAuthContext } from '../context/AuthContext';
import UserForm from '../components/User/UserForm';
import SvgLink from '../components/SvgLink';
import { pickBy } from 'lodash';

const Index: NextPage = ({
	user
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	// const { auth } = useAuthContext();
	// const { userData } = useUserContext();
	const [showFormModal, setShowFormModal] = useState(false);

	return (
		<>
			{/* <div className={`modal ${showFormModal ? 'modal-open' : null}`}>
				<div className='modal-box'>
					<UserForm handleShow={setShowFormModal} />
				</div>
			</div> */}
			<div className='container mx-auto space-y-14 text-center relative w-full max-w-7xl'>
				{/* {auth ? (
					<div
						className='absolute top-0 left-0 btn btn-primary'
						onClick={() => setShowFormModal(true)}
					>
						Edit
					</div>
				) : null} */}
				<div className='text-5xl uppercase md:text-8xl'>
					{user.full_name}
				</div>
				<div className='text-2xl uppercase'>{user.tagline}</div>
				<svg
					className='block mx-auto rounded-full'
					width={200}
					height={200}
				>
					<image href={user.avatar_url} width={200} height={200} />
				</svg>
				<div className='flex flex-row space-x-4 mx-auto justify-center items-center'>
					{Object.entries(
						pickBy(user.link_urls, (value) => !!value)
					).map(([key, value]) => (
						<SvgLink key={key} type={key} url={value} />
					))}
				</div>
				<div>{user.description}</div>
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const userRes = await fetch(`${process.env.API_URL}/user`);
	const user = await userRes.json();

	return {
		props: {
			user
		}
	};
};

export default Index;
