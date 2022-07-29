export const TECH = {
	NODE_JS: 'Node.js',
	TYPESCRIPT: 'Typescript',
	REACT: 'React',
	POSTGRESQL: 'PostgreSQL',
	NEST_JS: 'NestJS',
	NEXT_JS: 'Next.js',
	REDIS: 'Redis',
	STRIPE: 'Stripe',
	MUI: 'Material UI',
	JWT: 'JWT',
	EXPRESS: 'Express',
	REDUX: 'Redux',
	SOCKET_IO: 'Socket.io',
	HEROKU: 'Heroku',
	AWS: 'AWS',
	NETLIFY: 'Netlify',
	DOCKER: 'Docker',
	SWAGGER: 'Swagger',
	POSTMAN: 'Postman',
	MOCHA: 'Mocha',
	CHAI: 'Chai',
	JEST: 'Jest',
	SEQUELIZE: 'Sequelize',
	PRISMA: 'Prisma',
	PASSPORT: 'Passport',
	BOOTSTRAP: 'Bootstrap',
	JASMINE: 'Jasmine',
	NPM: 'NPM',
	YARN: 'Yarn',
	GITHUB: 'Github',
	WEB: 'Web',
	EMAIL: 'Email'
};
export const EMAILJS = {
	PUB_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUB_KEY || '',
	TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
	SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
};

export const GITHUB_LINK = process.env.NEXT_PUBLIC_GITHUB_LINK || '';
export const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || '';

export const BUILT_WITH = [TECH.NEXT_JS, TECH.TYPESCRIPT, TECH.REACT, TECH.MUI];
