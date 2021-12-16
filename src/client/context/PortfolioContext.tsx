import { createContext, ReactNode, useContext, useState } from 'react';

interface Project {
	id: number;
	name: string;
	description: string;
	repo_url: string;
	web_url?: string;
	languages: string[];
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

export const usePortfolio = () => {
	return useContext(PortfolioContext);
};

type Props = {
	children: ReactNode;
};

export const PortfolioProvider = ({ children }: Props) => {
	const [projectsData, setProjectsData] = useState<Project[]>([]);

	const handleProjectsData = (projects: Project[]) => {
		setProjectsData(projects);
	};

	const value = {
		projectsData,
		handleProjectsData
	};

	return (
		<>
			<PortfolioContext.Provider value={value}>
				{children}
			</PortfolioContext.Provider>
		</>
	);
};
