import { TECH } from '../../constants';

const data = [
	{
		title: 'Toptal',
		role: 'Freelance Software Developer',
		dates: '10/2021 ~ Current',
		tech_stack: [
			TECH.NODE_JS,
			TECH.REACT,
			TECH.REDUX,
			TECH.TYPESCRIPT,
			TECH.NEST_JS,
			TECH.DOCKER,
			TECH.MUI,
			TECH.STRIPE,
			TECH.REDIS,
			TECH.PRISMA,
			TECH.POSTGRESQL,
			TECH.JEST,
			TECH.PASSPORT,
			TECH.SWAGGER,
			TECH.AWS,
			TECH.JWT
		],
		description: [
			'Oversaw an international team of developers across three countries to develop the initial MVP used to raise over $1MM in investment funding while ensuring 100% of team KPI’s were met.'
		]
	},
	{
		title: 'The Villa Life',
		role: 'Full Stack Developer',
		dates: '10/2021 ~ -3/2023',
		tech_stack: [
			TECH.NODE_JS,
			TECH.REACT,
			TECH.REDUX,
			TECH.TYPESCRIPT,
			TECH.NEST_JS,
			TECH.DOCKER,
			TECH.MUI,
			TECH.STRIPE,
			TECH.REDIS,
			TECH.PRISMA,
			TECH.POSTGRESQL,
			TECH.JEST,
			TECH.PASSPORT,
			TECH.SWAGGER,
			TECH.AWS,
			TECH.JWT
		],
		description: [
			'Implemented NestJS and Typescript as replacements for NodeJS and Express to improve code efficiency by 30%, reduce error rate by 30%, and implement a new architecture that improved efficiency and maintenance.',
			'Created an affiliation program allowing strategic partnerships with travel agents and influencers, contracting with approximately 30 external stakeholders to allow access to the platform, increasing revenue 20%.',
			'Developed database resource optimizations through implementation of redis cache for frequently accessed DBs as well as implementing a new pricing structure, reducing database resource usage by 80%.',
			'Led projects improving efficiencies including employing Slack and Monday.com to improve communication and task management and developing our own calendar management system saving $6,000 annually in service fees.',
			'Managed a move from utilizing Sequelize ORM to Prisma ORM to utilize the latter’s improved Typescript support, this project improved coding efficiency by 20% and was completed on time and under budget.',
			'Acted as a consultant with the CTO to implement a new pricing structure using the same DB structure to support both the old and new structures, saving 240 hours that were able to be dedicated to other projects.',
			'Built ICS syncing functionality to allow hosts to integrate their calendars into the system, this decreased denied bookings by 40% improving client and stakeholder satisfaction with the platform.'
		]
	},
	{
		title: 'bitHolla',
		role: 'Backend Developer',
		dates: '04/2019 ~ 09/2021',
		tech_stack: [
			TECH.NODE_JS,
			TECH.POSTGRESQL,
			TECH.SEQUELIZE,
			TECH.EXPRESS,
			TECH.SWAGGER,
			TECH.DOCKER,
			TECH.REDIS,
			TECH.MOCHA,
			TECH.CHAI,
			TECH.POSTMAN,
			TECH.SOCKET_IO,
			TECH.AWS,
			TECH.JWT
		],
		description: [
			'Led the development of a trading algorithm to provide liquidity to the exchange, increasing customer volume by more than double, increased transaction fee revenue by 100%, and reduced liquidity maintenance hours by 90%.',
			'Created the architecture for open-source plugin development, increasing developer engagement on Discord and Github by 60%, the new architecture allowed the development of three plugins within the first two months.',
			'Automated systems including withdrawal/deposits and user tier upgrading, tasks that previously had to be manually handled by admins, reducing error rates of transactions by 30% and increasing work hour efficiency by 70%.',
			'Implemented improved exchange configuration architecture, allowing operators to update crucial values such as trade fees and trade limits on the fly, increasing uptime of servers by 30%.',
			'Integrated a third party KYC service to significantly improve user authentication services, this automation of the authentication flow decreased error rate by 30% and improved efficiency by 90%.'
		]
	}
];

export default data;
