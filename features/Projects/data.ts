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
			TECH.SOCKET_IO,
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
		title: 'Knowledge Drop',
		description:
			'RESTful Wikipedia-clone that allows users to upgrade their accounts, post wikis, collaborate on wikis, and view wikis.',
		tech_stack: [
			TECH.NODE_JS,
			TECH.EXPRESS,
			TECH.BOOTSTRAP,
			TECH.JASMINE,
			TECH.POSTGRESQL,
			TECH.STRIPE,
			TECH.PASSPORT,
			TECH.HEROKU
		],
		links: {
			github: 'https://github.com/brandonkimmmm/knowledge-drop'
		},
		image: 'https://camo.githubusercontent.com/4936658b0b3bfb7da11c4b825a082f17049119c2bc3d49abc802775f43c3c256/68747470733a2f2f692e696d6775722e636f6d2f394d384b7078512e706e67'
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
