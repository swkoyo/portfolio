import { uniq } from 'lodash';
import { APP, TECH } from '../../constants';
import { Project } from '../../types';

const projects: Project[] = [
	{
		title: 'Portfolio',
		featured: false,
		description: 'This current website.',
		tech: {
			full: [],
			core: [TECH.TS, TECH.NEXT, TECH.REACT, TECH.MANTINE],
			deployment: [TECH.VERCEL],
			libraries: [TECH.MANTINE, TECH.LODASH],
			database: [],
			languages: [TECH.TS, TECH.JS, TECH.HTML, TECH.CSS],
			frameworks: [TECH.NEXT, TECH.REACT],
			environment: [TECH.GIT, TECH.WEBPACK, TECH.ESLINT, TECH.PRETTIER]
		},
		links: [
			{
				type: APP.GITHUB,
				url: 'https://github.com/swkoyo/portfolio'
			},
			{
				type: APP.WEBSITE,
				url: 'https://swkoyo.com'
			}
		],
		images: [
			'/projects/portfolio/landing.png',
			'/projects/portfolio/about.png',
			'/projects/portfolio/experience.png',
			'/projects/portfolio/projects.png'
		]
	},
	{
		title: 'Collablist',
		featured: true,
		description:
			'Collablist is a real-time collborative web-application where multiple users can create, read, update, and delete items on a list.',
		tech: {
			full: [],
			core: [TECH.TS, TECH.NEXT, TECH.REACT, TECH.REDUX],
			deployment: [TECH.RENDER],
			libraries: [
				TECH.REDUX,
				TECH.PASSPORT,
				TECH.ZOD,
				TECH.CHAKRAUI,
				TECH.LODASH,
				TECH.JWT
			],
			database: [TECH.SQLITE, TECH.PRISMA],
			languages: [TECH.TS, TECH.JS, TECH.HTML, TECH.CSS, TECH.SQL],
			frameworks: [TECH.REACT, TECH.NEST, TECH.EXPRESS],
			environment: [
				TECH.NODE,
				TECH.GIT,
				TECH.VITE,
				TECH.ESLINT,
				TECH.PRETTIER
			]
		},
		links: [
			{
				type: APP.GITHUB,
				url: 'https://github.com/swkoyo/collablist'
			},
			{
				type: APP.WEBSITE,
				url: 'https://collablist.onrender.com'
			}
		],
		images: [
			'/projects/collablist/landing.png',
			'/projects/collablist/dashboard.png',
			'/projects/collablist/newlist.png'
		]
	},
	{
		title: 'Agora',
		featured: true,
		description:
			'RESTful Reddit-clone where users can post topics, post comments, vote on both, and favorite topics and comments.',
		tech: {
			full: [],
			core: [TECH.TS, TECH.NEST, TECH.REACT, TECH.REDUX],
			deployment: [TECH.RENDER],
			libraries: [
				TECH.PASSPORT,
				TECH.REDUX,
				TECH.CHAKRAUI,
				TECH.JWT,
				TECH.LODASH,
				TECH.ZOD
			],
			database: [TECH.SQLITE, TECH.PRISMA],
			languages: [TECH.TS, TECH.JS, TECH.HTML, TECH.CSS, TECH.SQL],
			frameworks: [TECH.REACT, TECH.NEST, TECH.EXPRESS],
			environment: [
				TECH.NODE,
				TECH.VITE,
				TECH.GIT,
				TECH.ESLINT,
				TECH.PRETTIER
			]
		},
		links: [
			{
				type: APP.GITHUB,
				url: 'https://github.com/swkoyo/agora'
			},
			{
				type: APP.WEBSITE,
				url: 'https://agora-9tod.onrender.com'
			}
		],
		images: [
			'/projects/agora/landing.png',
			'/projects/agora/login.png',
			'/projects/agora/post-page.png',
			'/projects/agora/topic-page.png'
		]
	},
	{
		title: 'Chatty',
		featured: false,
		description:
			'SPA chat-room that uses React router and allows users to chat as a guest or a signed-in user inside chat rooms.',
		tech: {
			full: [],
			core: [TECH.REACT, TECH.FIREBASE, TECH.TS, TECH.CHAKRAUI],
			deployment: [TECH.RENDER, TECH.GOOGLECLOUD],
			libraries: [TECH.CHAKRAUI, TECH.LODASH],
			database: [TECH.FIREBASE],
			languages: [TECH.TS, TECH.JS, TECH.HTML, TECH.CSS],
			frameworks: [TECH.REACT],
			environment: [TECH.VITE, TECH.GIT, TECH.ESLINT, TECH.PRETTIER]
		},
		links: [
			{
				type: APP.GITHUB,
				url: 'https://github.com/swkoyo/chatty'
			},
			{
				type: APP.WEBSITE,
				url: 'https://chatty-z8hu.onrender.com'
			}
		],
		images: [
			'/projects/chatty/landing.png',
			'/projects/chatty/chat-page.png'
		]
	},
	{
		title: 'Blackjack',
		featured: true,
		description:
			'SPA blackjack game build using Create React App that uses deckofcards API to draw cards.',
		tech: {
			full: [],
			core: [TECH.TS, TECH.REACT, TECH.REDUX, TECH.MUI],
			deployment: [TECH.RENDER],
			libraries: [TECH.MUI, TECH.REDUX, TECH.LODASH],
			database: [],
			languages: [TECH.TS, TECH.JS, TECH.HTML, TECH.CSS],
			frameworks: [TECH.REACT],
			environment: [TECH.WEBPACK, TECH.GIT, TECH.ESLINT, TECH.PRETTIER]
		},
		links: [
			{
				type: APP.GITHUB,
				url: 'https://github.com/swkoyo/blackjack'
			},
			{
				type: APP.WEBSITE,
				url: 'https://blackjack-u3ip.onrender.com'
			}
		],
		images: [
			'/projects/blackjack/landing.png',
			'/projects/blackjack/game.png',
			'/projects/blackjack/win.png',
			'/projects/blackjack/lose.png'
		]
	},
	{
		title: 'NBooA',
		featured: false,
		description:
			'Fullstack Vue/Flask application that uses webscrapping and pandas to get NBA player stats on specific dates.',
		tech: {
			full: [],
			core: [TECH.TS, TECH.VUE, TECH.PYTHON, TECH.FLASK],
			deployment: [TECH.RENDER],
			libraries: [
				TECH.TAILWIND,
				TECH.MARSHMALLOW,
				TECH.BEAUTIFUL_SOUP,
				TECH.PANDAS
			],
			database: [TECH.SQLITE, TECH.SQLALCHEMY],
			languages: [TECH.TS, TECH.JS, TECH.HTML, TECH.CSS, TECH.PYTHON],
			frameworks: [TECH.VUE, TECH.FLASK],
			environment: [TECH.VITE, TECH.GUNICORN, TECH.GIT]
		},
		links: [
			{
				type: APP.GITHUB,
				url: 'https://github.com/swkoyo/nbooa'
			},
			{
				type: APP.WEBSITE,
				url: 'https://nbooa.onrender.com'
			}
		],
		images: [
			'/projects/nbooa/landing.png',
			'/projects/nbooa/players.png',
			'/projects/nbooa/gamelog.png'
		]
	}
];

export const TECH_CATEGORIES = [
	'languages',
	'frameworks',
	'libraries',
	'database',
	'deployment',
	'environment'
];

export const PROJECTS = projects.map(({ tech, ...project }) => ({
	...project,
	tech: {
		...tech,
		full: uniq([
			...tech.database,
			...tech.deployment,
			...tech.environment,
			...tech.languages,
			...tech.libraries,
			...tech.frameworks
		])
	}
}));
