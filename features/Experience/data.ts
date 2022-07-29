import TECH from '../../constants';

const data = [
	{
		title: 'The Villa Life',
		role: 'Senior Full Stack Developer',
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
			'Developed the MVP for the platform including frontend client (React/Redux/MUI), backend server (NestJS, Node), and database architecture (PostgreSQL, Prisma)',
			'Integrated a booking management platform API (Guesty) to server via webhooks and Axios',
			'Implemented API authentication functionalities for JWT, HMAC, and Oauth2 (Facebook, Google)',
			'Built out payment functionalities for credit cards using Stripe including an automated payment collection cronjob 60 days from booking dates and user card information management',
			'Delegated responsibilities between myself and two other developers'
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
			'Developed liquidity-providing trading bot that places and manages orders based on real-time events from other cryptocurrency exchanges such as Binance and Bithumb',
			'Assisted in designing plugin architecture for cryptocurrency exchange platform and developed multiple plugins',
			'Implemented server API data streams for larger data sets',
			'Improved client library for exchange API and created new tools library for ease of development for current code base and future plugins',
			'Responsible for maintaining and running integration tests for upcoming releases using Postman'
		]
	}
];

export default data;
