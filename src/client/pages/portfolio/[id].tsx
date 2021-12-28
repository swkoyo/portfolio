import React, { useEffect, useState } from 'react';
import {
	NextPage,
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType
} from 'next';
import { useRouter } from 'next/router';
import { usePortfolioContext } from '../../context/PortfolioContext';
import ProjectPage from '../../components/Project/ProjectPage';
import { API_URL } from '../../config';

const Project: NextPage = ({
	project
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const router = useRouter();
	// const { projectsData } = usePortfolioContext();
	// const [project, setProject] = useState(null);

	// useEffect(() => {
	// 	const id = parseInt(router.query.id as string);
	// 	const project = projectsData.find((project) => project.id === id);

	// 	if (!project) {
	// 		alert('Project not found');
	// 		router.push('/portfolio');
	// 	} else {
	// 		setProject(project);
	// 	}
	// }, [projectsData]);

	// return project ? <ProjectPage project={project} /> : <></>;

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return <ProjectPage project={project} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const projectsRes = await fetch(`${API_URL}/projects`);
	const projects = await projectsRes.json();

	return {
		paths: projects.map((project) => {
			return {
				params: { id: project.id.toString() }
			};
		}),
		fallback: true
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const res = await fetch(`${API_URL}/projects/${params.id}`);
	const project = await res.json();

	return {
		props: {
			project
		}
	};
};

export default Project;
