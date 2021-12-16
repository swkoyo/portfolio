import React, { useEffect, useState } from 'react';
import {
	GetServerSideProps,
	NextPage,
	InferGetServerSidePropsType
} from 'next';
import { usePortfolio } from '../context/PortfolioContext';

const Portfolio: NextPage = ({
	projectsProps
}: InferGetServerSidePropsType<GetServerSideProps>) => {
	const [projectsData, setProjectsData] = useState(projectsProps);
	const { handleProjectsData, ...contextRest } = usePortfolio();

	useEffect(() => {
		if (typeof projectsProps === 'object' && projectsProps.length > 0) {
			handleProjectsData(projectsProps);
		}
	}, [handleProjectsData]);

	useEffect(() => {
		if (projectsProps.length <= 0 && contextRest.projectsData.length > 0) {
			setProjectsData(contextRest.projectsData);
		}
	}, []);

	return <div>{JSON.stringify(projectsData)}</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch('http://localhost:3000/api/projects');
	const data = await res.json();

	return { props: { projectsProps: data.projects } };
};

export default Portfolio;
