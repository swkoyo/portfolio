import { createContext, ReactNode, useContext, useState } from 'react';
import { Project, Technology } from '../models';

type portfolioContextType = {
	projectsData?: Project[];
	technologiesData?: Technology[];
	handleProjectsData: (projects: Project[]) => void;
	handleTechnologiesData: (technologies: Technology[]) => void;
};

const portfolioContextDefaultValues: portfolioContextType = {
	projectsData: [],
	technologiesData: [],
	handleProjectsData: () => {},
	handleTechnologiesData: () => {}
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

	const value = {
		projectsData,
		technologiesData,
		handleProjectsData,
		handleTechnologiesData
	};

	return (
		<PortfolioContext.Provider value={value}>
			{children}
		</PortfolioContext.Provider>
	);
};
