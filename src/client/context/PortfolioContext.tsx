import { createContext, ReactNode, useContext, useState } from 'react';
import { Project, Technology } from '../models';
import cookieCutter from 'cookie-cutter';

export type AddProjectData = Omit<Project, 'id'>;
export type UpdateProjectData = Partial<Omit<AddProjectData, 'technologies'>>;

export type AddTechnologyData = Omit<Technology, 'id'>;
export type UpdateTechnologyData = Partial<
	Omit<AddTechnologyData, 'technologies'>
>;

type portfolioContextType = {
	projectsData?: Project[];
	technologiesData?: Technology[];
	refreshData: () => void;
	deleteProject: (id: number) => void;
	deleteTechnology: (id: number) => void;
	addProject: (project: AddProjectData) => void;
	addTechnology: (technology: AddTechnologyData) => void;
	updateTechnology: (id: number, data: UpdateTechnologyData) => void;
	updateProject: (id: number, data: UpdateProjectData) => void;
	addProjectTechnology: (id: number, technology_id: number) => void;
	removeProjectTechnology: (id: number, technology_id: number) => void;
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

	const deleteProject = async (id: number) => {
		const res = await fetch(
			`http://localhost:3000/api/projects?id=${encodeURIComponent(id)}`,
			{
				method: 'DELETE',
				headers: {
					authorization: `Bearer ${cookieCutter.get('token')}`
				}
			}
		);

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data.message);
		}

		await refreshData();
	};

	const deleteTechnology = async (id: number) => {
		const res = await fetch(
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

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data.message);
		}

		await refreshData();
	};

	const addProject = async (project: Project) => {
		const res = await fetch('http://localhost:3000/api/projects', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${cookieCutter.get('token')}`
			},
			body: JSON.stringify(project)
		});

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data.message);
		}

		await refreshData();
	};

	const addTechnology = async (technology: AddTechnologyData) => {
		const res = await fetch('http://localhost:3000/api/technologies', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${cookieCutter.get('token')}`
			},
			body: JSON.stringify(technology)
		});

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data.message);
		}

		await refreshData();
	};

	const updateTechnology = async (id: number, data: UpdateTechnologyData) => {
		const res = await fetch('http://localhost:3000/api/technologies', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${cookieCutter.get('token')}`
			},
			body: JSON.stringify({ id, data })
		});

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data.message);
		}

		await refreshData();
	};

	const updateProject = async (id: number, data: UpdateProjectData) => {
		const res = await fetch('http://localhost:3000/api/projects', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${cookieCutter.get('token')}`
			},
			body: JSON.stringify({ id, data })
		});

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data.message);
		}

		await refreshData();
	};

	const addProjectTechnology = async (id: number, technology_id: number) => {
		const res = await fetch(
			'http://localhost:3000/api/projects/technology',
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${cookieCutter.get('token')}`
				},
				body: JSON.stringify({ id, technology_id })
			}
		);

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data.message);
		}

		await refreshData();
	};

	const removeProjectTechnology = async (
		id: number,
		technology_id: number
	) => {
		const res = await fetch(
			'http://localhost:3000/api/projects/technology',
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${cookieCutter.get('token')}`
				},
				body: JSON.stringify({ id, technology_id })
			}
		);

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data.message);
		}

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
