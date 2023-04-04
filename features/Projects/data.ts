import { TECH } from '../../constants';

const data = [
	{
		title: 'Portfolio',
		description: 'This current website.',
		tech_stack: [
			TECH.TYPESCRIPT,
			TECH.REACT,
			TECH.MUI,
			TECH.NEXT_JS,
			TECH.ZOD,
			TECH.VERCEL,
			TECH.LODASH,
			TECH.ESLINT,
			TECH.PRETTIER,
			TECH.RENDER
		],
		links: {
			github: 'https://github.com/swkoyo/portfolio',
			web: 'https://swkoyo.com'
		},
		image: '/portfolio.png'
	},
	{
		title: 'Collablist',
		description:
			'Collablist is a real-time collborative web-application where multiple users can create, read, update, and delete items on a list.',
		tech_stack: [
			TECH.TYPESCRIPT,
			TECH.NODE_JS,
			TECH.REACT,
			TECH.NEST_JS,
			TECH.SQLITE,
			TECH.REDUX,
			TECH.PRISMA,
			TECH.PASSPORT,
			TECH.ZOD,
			TECH.CHAKRA_UI,
			TECH.LODASH,
			TECH.VITE,
			TECH.JWT,
			TECH.ESLINT,
			TECH.PRETTIER
		],
		links: {
			github: 'https://github.com/swkoyo/collablist',
			web: 'https://collablist.onrender.com'
		},
		image: '/collablist.png'
	},
	{
		title: 'Agora',
		description:
			'RESTful Reddit-clone where users can post topics, post comments, vote on both, and favorite topics and comments.',
		tech_stack: [
			TECH.TYPESCRIPT,
			TECH.NODE_JS,
			TECH.REACT,
			TECH.NEST_JS,
			TECH.SQLITE,
			TECH.PRISMA,
			TECH.PASSPORT,
			TECH.REDUX,
			TECH.CHAKRA_UI,
			TECH.VITE,
			TECH.JWT,
			TECH.LODASH,
			TECH.ZOD,
			TECH.RENDER,
			TECH.ESLINT,
			TECH.PRETTIER
		],
		links: {
			github: 'https://github.com/swkoyo/agora',
			web: 'https://agora-9tod.onrender.com'
		},
		image: '/agora.png'
	},
	{
		title: 'Chatty',
		description:
			'SPA chat-room that uses React router and allows users to chat as a guest or a signed-in user inside chat rooms.',
		tech_stack: [
			TECH.TYPESCRIPT,
			TECH.REACT,
			TECH.CHAKRA_UI,
			TECH.GOOGLE_CLOUD,
			TECH.LODASH,
			TECH.VITE,
			TECH.FIREBASE,
			TECH.ESLINT,
			TECH.PRETTIER,
			TECH.RENDER
		],
		links: {
			github: 'https://github.com/swkoyo/chatty',
			web: 'https://chatty-z8hu.onrender.com'
		},
		image: '/chatty.png'
	},
	{
		title: 'Blackjack',
		description:
			'SPA blackjack game build using Create React App that uses deckofcards API to draw cards.',
		tech_stack: [
			TECH.TYPESCRIPT,
			TECH.REACT,
			TECH.MUI,
			TECH.WEBPACK,
			TECH.REDUX,
			TECH.ESLINT,
			TECH.LODASH,
			TECH.PRETTIER,
			TECH.RENDER
		],
		links: {
			github: 'https://github.com/swkoyo/blackjack',
			web: 'https://blackjack-u3ip.onrender.com'
		},
		image: '/blackjack.png'
	}
];

export default data;
