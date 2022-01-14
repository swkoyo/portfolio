import React from 'react';
import {
	NextPage,
	InferGetServerSidePropsType,
	GetServerSideProps
} from 'next';
import SvgLink from '../components/SvgLink';
import { pickBy } from 'lodash';
import Landing from '../components/Landing';
import About from '../components/About';

const Index: NextPage = ({
	user
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<div className='mx-auto w-full'>
			<Landing user={user} />
			<About user={user} />
		</div>
		// <div className='container mx-auto space-y-14 text-center relative w-full max-w-7xl'>
		// 	<div className='text-5xl uppercase md:text-8xl'>
		// 		{user.full_name}
		// 	</div>
		// 	<div className='text-2xl uppercase'>{user.tagline}</div>
		// 	<svg
		// 		className='block mx-auto rounded-full'
		// 		width={200}
		// 		height={200}
		// 	>
		// 		<image href={user.avatar_url} width={200} height={200} />
		// 	</svg>
		// 	<div className='flex flex-row space-x-4 mx-auto justify-center items-center'>
		// 		{Object.entries(pickBy(user.link_urls, (value) => !!value)).map(
		// 			([key, value]) => (
		// 				<SvgLink key={key} type={key} url={value} />
		// 			)
		// 		)}
		// 	</div>
		// 	<div>{user.description}</div>
		// </div>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const userRes = await fetch(`${process.env.API_URL}/user`);
	const user = await userRes.json();

	return {
		props: {
			user
		}
	};
};

export default Index;
