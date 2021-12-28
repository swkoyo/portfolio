import React from 'react';
import {
	NextPage,
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType
} from 'next';
import { useRouter } from 'next/router';
import ProjectPage from '../../components/Project/ProjectPage';

const Project: NextPage = ({
	project
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const router = useRouter();
	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return <ProjectPage project={project} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	const projectsRes = await fetch(`${process.env.API_URL}/projects`);
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
	const res = await fetch(`${process.env.API_URL}/projects/${params.id}`);
	const project = await res.json();

	return {
		props: {
			project
		}
	};
};

export default Project;
