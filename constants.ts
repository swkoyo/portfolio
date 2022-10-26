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
	EMAIL: 'Email',
	LINKEDIN: 'LinkedIn',
	CHAKRA_UI: 'Chakra UI',
	VITE: 'Vite',
	SQLITE: 'SQLite'
};

export const TECH_COLOR = {
	NODE_JS: '#6CA75C',
	TYPESCRIPT: '#2F75C1',
	REACT: '#5ED3F3',
	POSTGRESQL: '#336690',
	NEST_JS: '#D5204B',
	NEXT_JS: '#010001',
	REDIS: '#D1352B',
	STRIPE: '#636DD9',
	MUI: '#0079F2',
	JWT: '#CB36F3',
	EXPRESS: '#2E2F2E',
	REDUX: '#7A40BA',
	SOCKET_IO: '#000100',
	HEROKU: '#6012A9',
	AWS: '#F29100',
	NETLIFY: '#25B5AF',
	DOCKER: '#238EE0',
	SWAGGER: '#7FDF2B',
	POSTMAN: '#F26635',
	MOCHA: '#866345',
	CHAI: '#F3E3B0',
	JEST: '#7E3752',
	SEQUELIZE: '#3871B9',
	PRISMA: '#0A3146',
	PASSPORT: '#30D675',
	BOOTSTRAP: '#5D4483',
	JASMINE: '#833E7B',
	NPM: '#BF3434',
	YARN: '#2A87B1',
	GITHUB: '#22262D',
	LINKEDIN: '#0860B8',
	CHAKRA_UI: '#3CBCBB',
	VITE: '#7878F1',
	SQLITE: '#2C8FCF'
};

export const EMAILJS = {
	PUB_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUB_KEY || '',
	TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
	SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
};

export const GITHUB_LINK = process.env.NEXT_PUBLIC_GITHUB_LINK || '';
export const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || '';
export const LINKEDIN_LINK = process.env.NEXT_PUBLIC_LINKEDIN_LINK || '';

export const BUILT_WITH = [TECH.NEXT_JS, TECH.TYPESCRIPT, TECH.REACT, TECH.MUI];
