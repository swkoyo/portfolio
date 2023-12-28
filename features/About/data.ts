import {
	APP,
	EMAIL_ADDRESS,
	GITHUB_LINK,
	LINKEDIN_LINK,
	TECH
} from '../../constants';

export const BIO = [
	`
		Hello! My name is Brandon, and I enjoy creating things that live on the internet.
		My journey in development started in 2017 when I decided to take an Intro to CS course on a whim.
		I immediately fell in love with it and decided to pursue it as a career.
	`,
	`
		Fast forward to today, and I've had the privilege of working at a cryptocurrency exchange company and a hospitality startup.
		My main focus is writing clear, maintainable code that fulfills the required use cases.
	`,
	`
		Outside of work, I pursue personal projects that help me learn new technologies.
		These projects include building a home server, aggregating NBA statistics, and testing new Linux operating systems.
	`
];

export const CORE_TECH = [
	TECH.NODE,
	TECH.TS,
	TECH.REACT,
	TECH.PSQL,
	TECH.PYTHON,
	TECH.AZURE,
	TECH.AWS,
	TECH.DOCKER,
	TECH.REDIS
];

export const INFO = [
	{
		type: APP.EMAIL,
		value: EMAIL_ADDRESS,
		link: `mailto:${EMAIL_ADDRESS}`
	},
	{
		type: APP.GITHUB,
		value: GITHUB_LINK.split('.com/')[1],
		link: GITHUB_LINK
	},
	{
		type: APP.LINKEDIN,
		value: LINKEDIN_LINK.split('/in/')[1],
		link: LINKEDIN_LINK
	}
];
