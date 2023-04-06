import { MdOutlineScience, MdOutlineSoupKitchen } from 'react-icons/md';
import { TECH, APP } from '../constants';
import {
	SiAmazonaws,
	SiChai,
	SiChakraui,
	SiEslint,
	SiExpress,
	SiFlask,
	SiGooglecloud,
	SiGunicorn,
	SiHeroku,
	SiJasmine,
	SiJest,
	SiJsonwebtokens,
	SiLodash,
	SiMocha,
	SiMui,
	SiNestjs,
	SiNetlify,
	SiNodedotjs,
	SiNodemon,
	SiOpenapiinitiative,
	SiPandas,
	SiPassport,
	SiPm2,
	SiPostgresql,
	SiPostman,
	SiPrettier,
	SiRedis,
	SiRender,
	SiSequelize,
	SiSqlite,
	SiSwagger,
	SiWebpack,
	SiYarn
} from 'react-icons/si';
import {
	TbBrandBootstrap,
	TbBrandDocker,
	TbBrandFirebase,
	TbBrandGit,
	TbBrandGithub,
	TbBrandJavascript,
	TbBrandLinkedin,
	TbBrandMantine,
	TbBrandNextjs,
	TbBrandNpm,
	TbBrandPrisma,
	TbBrandPython,
	TbBrandReact,
	TbBrandRedux,
	TbBrandSocketIo,
	TbBrandStripe,
	TbBrandTailwind,
	TbBrandTypescript,
	TbBrandVercel,
	TbBrandVite,
	TbBrandVue,
	TbCodeCircle,
	TbMail,
	TbWorldWww
} from 'react-icons/tb';

interface Props {
	type: TECH | APP;
	size?: string | number;
}

export default function Icon({ type, size }: Props) {
	switch (type) {
		case TECH.NODE:
			return <SiNodedotjs size={size} />;
		case TECH.TS:
			return <TbBrandTypescript size={size} />;
		case TECH.REACT:
			return <TbBrandReact size={size} />;
		case TECH.PSQL:
			return <SiPostgresql size={size} />;
		case TECH.JS:
			return <TbBrandJavascript size={size} />;
		case TECH.NEST:
			return <SiNestjs size={size} />;
		case TECH.NEXT:
			return <TbBrandNextjs size={size} />;
		case TECH.MANTINE:
			return <TbBrandMantine size={size} />;
		case TECH.REDIS:
			return <SiRedis size={size} />;
		case TECH.STRIPE:
			return <TbBrandStripe size={size} />;
		case TECH.MUI:
			return <SiMui size={size} />;
		case TECH.JWT:
			return <SiJsonwebtokens size={size} />;
		case TECH.EXPRESS:
			return <SiExpress size={size} />;
		case TECH.REDUX:
			return <TbBrandRedux size={size} />;
		case TECH.SOCKETIO:
			return <TbBrandSocketIo size={size} />;
		case TECH.HEROKU:
			return <SiHeroku size={size} />;
		case TECH.NODEMON:
			return <SiNodemon size={size} />;
		case TECH.PM2:
			return <SiPm2 size={size} />;
		case TECH.AWS:
			return <SiAmazonaws size={size} />;
		case TECH.NETLIFY:
			return <SiNetlify size={size} />;
		case TECH.GOOGLECLOUD:
			return <SiGooglecloud size={size} />;
		case TECH.DOCKER:
			return <TbBrandDocker size={size} />;
		case TECH.SWAGGER:
			return <SiSwagger size={size} />;
		case TECH.OPENAPI:
			return <SiOpenapiinitiative size={size} />;
		case TECH.POSTMAN:
			return <SiPostman size={size} />;
		case TECH.MOCHA:
			return <SiMocha size={size} />;
		case TECH.CHAI:
			return <SiChai size={size} />;
		case TECH.JEST:
			return <SiJest size={size} />;
		case TECH.SEQUELIZE:
			return <SiSequelize size={size} />;
		case TECH.PRISMA:
			return <TbBrandPrisma size={size} />;
		case TECH.PASSPORT:
			return <SiPassport size={size} />;
		case TECH.BOOTSTRAP:
			return <TbBrandBootstrap size={size} />;
		case TECH.JASMINE:
			return <SiJasmine size={size} />;
		case TECH.NPM:
			return <TbBrandNpm size={size} />;
		case TECH.YARN:
			return <SiYarn size={size} />;
		case TECH.LODASH:
			return <SiLodash size={size} />;
		case TECH.CHAKRAUI:
			return <SiChakraui size={size} />;
		case TECH.VITE:
			return <TbBrandVite size={size} />;
		case TECH.SQLITE:
			return <SiSqlite size={size} />;
		case TECH.FIREBASE:
			return <TbBrandFirebase size={size} />;
		case TECH.WEBPACK:
			return <SiWebpack size={size} />;
		case TECH.ESLINT:
			return <SiEslint size={size} />;
		case TECH.PRETTIER:
			return <SiPrettier size={size} />;
		case TECH.RENDER:
			return <SiRender size={size} />;
		case TECH.VERCEL:
			return <TbBrandVercel size={size} />;
		case TECH.BEAUTIFUL_SOUP:
			return <MdOutlineSoupKitchen size={size} />;
		case TECH.VUE:
			return <TbBrandVue size={size} />;
		case TECH.PYTHON:
			return <TbBrandPython size={size} />;
		case TECH.FLASK:
			return <SiFlask size={size} />;
		case TECH.PANDAS:
			return <SiPandas size={size} />;
		case TECH.GUNICORN:
			return <SiGunicorn size={size} />;
		case TECH.TAILWIND:
			return <TbBrandTailwind size={size} />;
		case TECH.SQLALCHEMY:
			return <MdOutlineScience size={size} />;
		case TECH.GIT:
			return <TbBrandGit size={size} />;
		case APP.GITHUB:
			return <TbBrandGithub size={size} />;
		case APP.WEBSITE:
			return <TbWorldWww size={size} />;
		case APP.EMAIL:
			return <TbMail size={size} />;
		case APP.LINKEDIN:
			return <TbBrandLinkedin size={size} />;
		default:
			return <TbCodeCircle size={size} />;
	}
}
