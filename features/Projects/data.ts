import { TECH } from '../../constants';

const data = [
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
			TECH.VITE,
			TECH.JWT
		],
		links: {
			github: [
				'https://github.com/brandonkimmmm/collablist-client',
				'https://github.com/brandonkimmmm/collablist-server'
			],
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
			TECH.ZOD
		],
		links: {
			github: [
				'https://github.com/brandonkimmmm/agora-client',
				'https://github.com/brandonkimmmm/agora-server'
			],
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
			TECH.VITE,
			TECH.FIREBASE
		],
		links: {
			github: 'https://github.com/brandonkimmmm/chatty',
			web: 'https://chatty-z8hu.onrender.com/'
		},
		image: '/chatty.png'
	}
];

export default data;
