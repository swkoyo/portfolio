import React from 'react';
import {
	NextPage,
	GetServerSideProps,
	InferGetServerSidePropsType
} from 'next';
import { useRouter } from 'next/router';
import ProjectPage from '../../components/Project/ProjectPage';

const Project: NextPage = ({
	project
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const router = useRouter();
	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return <ProjectPage project={project} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const res = await fetch(`${process.env.API_URL}/projects/${params.id}`);
	const project = await res.json();

	return {
		props: {
			project
		}
	};
};

export default Project;
