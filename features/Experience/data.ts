import { TECH } from '../../constants';

export const JOBS = [
	{
		title: 'Thumb',
		url: 'https://www.thumb.is',
		role: 'Backend Developer',
		start_date: 'July 2023',
		tech_stack: [
			TECH.PYTHON,
			TECH.DJANGO,
			TECH.AZURE,
			TECH.PUPPETEER,
			TECH.FAST_API,
			TECH.NODE,
			TECH.TS,
			TECH.AWS,
			TECH.DOCKER,
			TECH.STRIPE,
			TECH.REDIS,
			TECH.PSQL,
			TECH.PRETTIER,
			TECH.ESLINT,
			TECH.RUFF,
			TECH.JWT
		],
		tasks: [
			'Implemented Microsoft Active Directory provisioning with SCIM protocol',
			'Added dev tooling that improved code readability and maintainability',
			'Improved core application that utilized less resources and had better error handling'
		]
	},
	{
		title: 'The Villa Life',
		url: 'https://thevillalife.com',
		role: 'Full Stack Developer',
		start_date: 'October 2021',
		end_date: 'July 2023',
		tech_stack: [
			TECH.NODE,
			TECH.REACT,
			TECH.REDUX,
			TECH.TS,
			TECH.NEST,
			TECH.DOCKER,
			TECH.MUI,
			TECH.STRIPE,
			TECH.REDIS,
			TECH.PRISMA,
			TECH.PSQL,
			TECH.JEST,
			TECH.PASSPORT,
			TECH.SWAGGER,
			TECH.LODASH,
			TECH.GOOGLECLOUD,
			TECH.PRETTIER,
			TECH.ESLINT,
			TECH.AWS,
			TECH.JWT
		],
		tasks: [
			'Led development of user-facing client that allowed customers to view, reserver, and manage bookings for various properties',
			'Designed and implemented architecture for backend server API that managed user, booking, property, and finance for platform',
			'Improved database architecture to allow dynamic pricing for properties based on guest count, holidays, etc'
		]
	},
	{
		title: 'bitHolla',
		url: 'https://bitholla.com',
		role: 'Software Developer',
		start_date: 'April 2019',
		end_date: 'September 2021',
		tech_stack: [
			TECH.NODE,
			TECH.PSQL,
			TECH.SEQUELIZE,
			TECH.EXPRESS,
			TECH.SWAGGER,
			TECH.DOCKER,
			TECH.REDIS,
			TECH.MOCHA,
			TECH.CHAI,
			TECH.POSTMAN,
			TECH.SOCKETIO,
			TECH.LODASH,
			TECH.PRETTIER,
			TECH.ESLINT,
			TECH.AWS,
			TECH.JWT
		],
		tasks: [
			'Created an automated algorithmic trading bot to provide liquidity to the exchange utilizing other crypto exchanges such as Binance and Bithumb',
			'Developed an architecture for open-source plugin development for the exchange',
			'Integrated various third party APIs to the exchange, including various fiat banking services and KYC SaaS services'
		]
	}
];
