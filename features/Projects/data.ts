import { APP, TECH } from '../../constants';
import { Project } from '../../types';

export const PROJECTS: Project[] = [
	{
		title: 'Portfolio',
		featured: false,
		description: 'This current website.',
		tech_stack: [
			TECH.TS,
			TECH.REACT,
			TECH.MUI,
			TECH.NEXT,
			TECH.ZOD,
			TECH.VERCEL,
			TECH.LODASH,
			TECH.ESLINT,
			TECH.PRETTIER,
			TECH.RENDER,
			TECH.GIT
		],
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
		image: '/portfolio.png'
	},
	{
		title: 'Collablist',
		featured: true,
		description:
			'Collablist is a real-time collborative web-application where multiple users can create, read, update, and delete items on a list.',
		tech_stack: [
			TECH.TS,
			TECH.NODE,
			TECH.REACT,
			TECH.NEST,
			TECH.SQLITE,
			TECH.REDUX,
			TECH.PRISMA,
			TECH.PASSPORT,
			TECH.ZOD,
			TECH.CHAKRAUI,
			TECH.LODASH,
			TECH.VITE,
			TECH.JWT,
			TECH.ESLINT,
			TECH.PRETTIER,
			TECH.GIT
		],
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
		image: '/collablist.png'
	},
	{
		title: 'Agora',
		featured: true,
		description:
			'RESTful Reddit-clone where users can post topics, post comments, vote on both, and favorite topics and comments.',
		tech_stack: [
			TECH.TS,
			TECH.NODE,
			TECH.REACT,
			TECH.NEST,
			TECH.SQLITE,
			TECH.PRISMA,
			TECH.PASSPORT,
			TECH.REDUX,
			TECH.CHAKRAUI,
			TECH.VITE,
			TECH.JWT,
			TECH.LODASH,
			TECH.ZOD,
			TECH.RENDER,
			TECH.ESLINT,
			TECH.PRETTIER,
			TECH.GIT
		],
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
		image: '/agora.png'
	},
	{
		title: 'Chatty',
		featured: false,
		description:
			'SPA chat-room that uses React router and allows users to chat as a guest or a signed-in user inside chat rooms.',
		tech_stack: [
			TECH.TS,
			TECH.REACT,
			TECH.CHAKRAUI,
			TECH.GOOGLECLOUD,
			TECH.LODASH,
			TECH.VITE,
			TECH.FIREBASE,
			TECH.ESLINT,
			TECH.PRETTIER,
			TECH.RENDER,
			TECH.GIT
		],
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
		image: '/chatty.png'
	},
	{
		title: 'Blackjack',
		featured: true,
		description:
			'SPA blackjack game build using Create React App that uses deckofcards API to draw cards.',
		tech_stack: [
			TECH.TS,
			TECH.REACT,
			TECH.MUI,
			TECH.WEBPACK,
			TECH.REDUX,
			TECH.ESLINT,
			TECH.LODASH,
			TECH.PRETTIER,
			TECH.RENDER,
			TECH.GIT
		],
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
		image: '/blackjack.png'
	},
	{
		title: 'NBooA',
		featured: false,
		description:
			'Fullstack Vue/Flask application that uses webscrapping and pandas to get NBA player stats on specific dates.',
		tech_stack: [
			TECH.TS,
			TECH.VUE,
			TECH.TAILWIND,
			TECH.PYTHON,
			TECH.FLASK,
			TECH.SQLALCHEMY,
			TECH.SQLITE,
			TECH.MARSHMALLOW,
			TECH.BEAUTIFUL_SOUP,
			TECH.GUNICORN,
			TECH.PANDAS,
			TECH.RENDER,
			TECH.GIT
		],
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
		image: '/nbooa.png'
	}
];
