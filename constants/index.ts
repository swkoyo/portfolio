export const NODE_ENV = process.env.NODE_ENV || 'development';

export const GITHUB_LINK = process.env.NEXT_PUBLIC_GITHUB_LINK || '';
export const LINKEDIN_LINK = process.env.NEXT_PUBLIC_LINKEDIN_LINK || '';
export const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME_LINK || '';

export const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || '';

/* eslint-disable no-unused-vars */

export enum TECH {
	NODE = 'Node.js',
	JS = 'JavaScript',
	TS = 'TypeScript',
	REACT = 'React',
	PSQL = 'PostgreSQL',
	NEST = 'NestJS',
	NEXT = 'Next.js',
	REDIS = 'Redis',
	STRIPE = 'Stripe',
	MUI = 'Material UI',
	JWT = 'JWT',
	EXPRESS = 'Express',
	REDUX = 'Redux',
	SOCKETIO = 'Socket.io',
	HEROKU = 'Heroku',
	AWS = 'AWS',
	NETLIFY = 'Netlify',
	DOCKER = 'Docker',
	SWAGGER = 'Swagger',
	POSTMAN = 'Postman',
	MOCHA = 'Mocha',
	CHAI = 'Chai',
	JEST = 'Jest',
	SEQUELIZE = 'Sequelize',
	PRISMA = 'Prisma',
	PASSPORT = 'Passport',
	BOOTSTRAP = 'Bootstrap',
	JASMINE = 'Jasmine',
	NPM = 'NPM',
	YARN = 'Yarn',
	NODEMON = 'Nodemon',
	CHAKRAUI = 'Chakra UI',
	PM2 = 'PM2',
	OPENAPI = 'OpenAPI',
	SQL = 'SQL',
	VITE = 'Vite',
	SQLITE = 'SQLite',
	FIREBASE = 'Firebase',
	ZOD = 'Zod',
	WEBPACK = 'Webpack',
	ESLINT = 'ESLint',
	PRETTIER = 'Prettier',
	RENDER = 'Render',
	VERCEL = 'Vercel',
	LODASH = 'Lodash',
	GOOGLECLOUD = 'Google Cloud',
	VUE = 'Vue',
	PYTHON = 'Python',
	FLASK = 'Flask',
	PANDAS = 'Pandas',
	BEAUTIFUL_SOUP = 'Beautiful Soup',
	GUNICORN = 'Gunicorn',
	TAILWIND = 'Tailwind',
	GIT = 'Git',
	SQLALCHEMY = 'SQLAlchemy',
	MARSHMALLOW = 'Marshmallow',
	MANTINE = 'Mantine',
	LINUX = 'Linux',
	HTML = 'HTML',
	CSS = 'CSS'
}

export enum APP {
	LINKEDIN = 'LinkedIn',
	GITHUB = 'Github',
	WEBSITE = 'Website',
	EMAIL = 'Email'
}

export enum FILE {
	PDF = 'PDF'
}

export enum NAV {
	HOME = 'Home',
	PROJECTS = 'Projects',
	RESUME = 'Resume'
}
