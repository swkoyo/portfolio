import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Index: NextPage = () => {
	return (
		<div>
			<Head>
			<title>My Portfolio</title>
			<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<h1>Hello from NextJS! - Home</h1>
			</main>
		</div>
	);
};

export default Index;
