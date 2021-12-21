import { createContext, ReactNode, useContext, useState } from 'react';
import { Project, Technology } from '../models';
import cookieCutter from 'cookie-cutter';

type portfolioContextType = {
	projectsData?: Project[];
	technologiesData?: Technology[];
	refreshData: () => void;
	deleteProject: (name: string) => void;
	deleteTechnology: (name: string) => void;
	addProject: (project: Project) => void;
	addTechnology: (technology: Technology) => void;
};

const portfolioContextDefaultValues: portfolioContextType = {
	projectsData: [],
	technologiesData: [],
	refreshData: () => {},
	deleteProject: () => {},
	deleteTechnology: () => {},
	addProject: () => {},
	addTechnology: () => {}
};

const PortfolioContext = createContext<portfolioContextType>(
	portfolioContextDefaultValues
);

export const usePortfolioContext = () => {
	return useContext(PortfolioContext);
};

type Props = {
	children: ReactNode;
	projects: Project[];
	technologies: Technology[];
};

export const PortfolioProvider = ({
	children,
	projects,
	technologies
}: Props) => {
	const [projectsData, setProjectsData] = useState<Project[]>(projects);
	const [technologiesData, setTechnologiesData] =
		useState<Technology[]>(technologies);

	const refreshData = async () => {
		const projectsRes = await fetch('http://localhost:3000/api/projects');
		const projects = await projectsRes.json();

		const technologiesRes = await fetch(
			'http://localhost:3000/api/technologies'
		);
		const technologies = await technologiesRes.json();

		setProjectsData(projects);
		setTechnologiesData(technologies);
	};

	const deleteProject = async (name: string) => {
		await fetch(
			`http://localhost:3000/api/projects?name=${encodeURIComponent(
				name
			)}`,
			{
				method: 'DELETE',
				headers: {
					authorization: `Bearer ${cookieCutter.get('token')}`
				}
			}
		);
		await refreshData();
	};

	const deleteTechnology = async (name: string) => {
		await fetch(
			`http://localhost:3000/api/technologies?name=${encodeURIComponent(
				name
			)}`,
			{
				method: 'DELETE',
				headers: {
					authorization: `Bearer ${cookieCutter.get('token')}`
				}
			}
		);
		await refreshData();
	};

	const addProject = async (project: Project) => {
		await fetch('http://localhost:3000/api/projects', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${cookieCutter.get('token')}`
			},
			body: JSON.stringify(project)
		});
		await refreshData();
	};

	const addTechnology = async (technology: Technology) => {
		await fetch('http://localhost:3000/api/technologies', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${cookieCutter.get('token')}`
			},
			body: JSON.stringify(technology)
		});
		await refreshData();
	};

	const value = {
		projectsData,
		technologiesData,
		refreshData,
		deleteProject,
		deleteTechnology,
		addProject,
		addTechnology
	};

	return (
		<PortfolioContext.Provider value={value}>
			{children}
		</PortfolioContext.Provider>
	);
};
