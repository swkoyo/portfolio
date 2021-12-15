import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Index: NextPage = () => {
	return (
		<div>
			<Head>
				<title>My Portfolio</title>
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>
			<main>
				<div className='text-3xl font-bold underline'>
					Hello from NextJS! - Index
				</div>
			</main>
		</div>
	);
};

export default Index;
