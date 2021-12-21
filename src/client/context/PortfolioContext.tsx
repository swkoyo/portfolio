import { createContext, ReactNode, useContext, useState } from 'react';
import { Project, Technology } from '../models';

type portfolioContextType = {
	projectsData?: Project[];
	technologiesData?: Technology[];
	handleProjectsData: (projects: Project[]) => void;
	handleTechnologiesData: (technologies: Technology[]) => void;
	refreshData: () => void;
};

const portfolioContextDefaultValues: portfolioContextType = {
	projectsData: [],
	technologiesData: [],
	handleProjectsData: () => {},
	handleTechnologiesData: () => {},
	refreshData: () => {}
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

	const handleProjectsData = (projects: Project[]) => {
		setProjectsData(projects);
	};

	const handleTechnologiesData = (technologies: Technology[]) => {
		setTechnologiesData(technologies);
	};

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

	const value = {
		projectsData,
		technologiesData,
		handleProjectsData,
		handleTechnologiesData,
		refreshData
	};

	return (
		<PortfolioContext.Provider value={value}>
			{children}
		</PortfolioContext.Provider>
	);
};
