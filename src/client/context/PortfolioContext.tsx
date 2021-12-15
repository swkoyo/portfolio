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
	projects?: Project[];
	addProject: (project: Project) => void;
};

const portfolioContextDefaultValues: portfolioContextType = {
	projects: [],
	addProject: () => {}
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
	const [projects, setProjects] = useState<Project[]>([]);

	const addProject = (project: Project) => {
		setProjects([...projects, project]);
	};

	const value = {
		projects,
		addProject
	};

	return (
		<>
			<PortfolioContext.Provider value={value}>
				{children}
			</PortfolioContext.Provider>
		</>
	);
};
