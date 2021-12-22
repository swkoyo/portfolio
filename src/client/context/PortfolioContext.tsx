import { createContext, ReactNode, useContext, useState } from 'react';
import { Project, Technology } from '../models';
import cookieCutter from 'cookie-cutter';

export type UpdateProjectData = Partial<Omit<Project, 'technologies'>>;
export type AddTechnologyData = Omit<Technology, 'id'>;
export type UpdateTechnologyData = Partial<AddTechnologyData>;

type portfolioContextType = {
	projectsData?: Project[];
	technologiesData?: Technology[];
	refreshData: () => void;
	deleteProject: (name: string) => void;
	deleteTechnology: (id: number) => void;
	addProject: (project: Project) => void;
	addTechnology: (technology: AddTechnologyData) => void;
	updateTechnology: (id: number, data: UpdateTechnologyData) => void;
	updateProject: (name: string, data: UpdateProjectData) => void;
	addProjectTechnology: (name: string, technology: string) => void;
	removeProjectTechnology: (name: string, technology: string) => void;
};

const portfolioContextDefaultValues: portfolioContextType = {
	projectsData: [],
	technologiesData: [],
	refreshData: () => {},
	deleteProject: () => {},
	deleteTechnology: () => {},
	addProject: () => {},
	addTechnology: () => {},
	updateTechnology: () => {},
	updateProject: () => {},
	addProjectTechnology: () => {},
	removeProjectTechnology: () => {}
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

	const deleteTechnology = async (id: number) => {
		await fetch(
			`http://localhost:3000/api/technologies?id=${encodeURIComponent(
				id
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

	const addTechnology = async (technology: AddTechnologyData) => {
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

	const updateTechnology = async (id: number, data: UpdateTechnologyData) => {
		await fetch('http://localhost:3000/api/technologies', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${cookieCutter.get('token')}`
			},
			body: JSON.stringify({ id, data })
		});
		await refreshData();
	};

	const updateProject = async (name: string, data: UpdateProjectData) => {
		await fetch('http://localhost:3000/api/projects', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${cookieCutter.get('token')}`
			},
			body: JSON.stringify({ name, data })
		});
		await refreshData();
	};

	const addProjectTechnology = async (name: string, technology: string) => {
		await fetch('http://localhost:3000/api/projects/technology', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${cookieCutter.get('token')}`
			},
			body: JSON.stringify({ name, technology })
		});
		await refreshData();
	};

	const removeProjectTechnology = async (
		name: string,
		technology: string
	) => {
		await fetch('http://localhost:3000/api/projects/technology', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${cookieCutter.get('token')}`
			},
			body: JSON.stringify({ name, technology })
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
		addTechnology,
		updateTechnology,
		updateProject,
		addProjectTechnology,
		removeProjectTechnology
	};

	return (
		<PortfolioContext.Provider value={value}>
			{children}
		</PortfolioContext.Provider>
	);
};
