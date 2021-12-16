import { createContext, ReactNode, useContext, useState } from 'react';

export interface Project {
	id: number;
	name: string;
	description: string;
	repo_url: string;
	web_url?: string;
	technologies?: string[];
	last_deployed: Date;
}

type portfolioContextType = {
	projectsData?: Project[];
	handleProjectsData: (projects: Project[]) => void;
};

const portfolioContextDefaultValues: portfolioContextType = {
	projectsData: [],
	handleProjectsData: () => {}
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
};

export const PortfolioProvider = ({ children, projects }: Props) => {
	const [projectsData, setProjectsData] = useState<Project[]>(projects);

	const handleProjectsData = (projects: Project[]) => {
		setProjectsData(projects);
	};

	const value = {
		projectsData,
		handleProjectsData
	};

	return (
		<PortfolioContext.Provider value={value}>
			{children}
		</PortfolioContext.Provider>
	);
};
