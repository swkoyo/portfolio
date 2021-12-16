import React from 'react';
import { NextPage } from 'next';
import { usePortfolioContext } from '../context/PortfolioContext';

const Portfolio: NextPage = () => {
	const { projectsData } = usePortfolioContext();

	return <div>{JSON.stringify(projectsData)}</div>;
};

export default Portfolio;
