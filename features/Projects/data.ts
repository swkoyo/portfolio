import { TECH } from '../../constants';

const data = [
	{
		title: 'Collablist',
		description:
			'Collablist is a real-time collborative web-application where multiple users can create, read, update, and delete items on a list.',
		tech_stack: [
			TECH.NODE_JS,
			TECH.REACT,
			TECH.NEST_JS,
			TECH.SQLITE,
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
			TECH.NODE_JS,
			TECH.REACT,
			TECH.NEST_JS,
			TECH.SQLITE,
			TECH.PRISMA,
			TECH.PASSPORT,
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
		title: 'HollaEx Client',
		description:
			'A node client library for connecting to the HollaEx cryptocurrency exchange with Typescript support.',
		tech_stack: [TECH.NODE_JS, TECH.TYPESCRIPT, TECH.NPM],
		links: {
			github: 'https://github.com/brandonkimmmm/hollaex-client'
		},
		image: 'https://www.zdnet.com/a/img/resize/826926ea82c40ba7e01656e2d0a884df497a668e/2020/01/13/7b52414d-132a-4ef9-b050-0f16e37f433b/npm.png?auto=webp&width=1200'
	}
];

export default data;
