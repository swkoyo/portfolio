import { DefaultMantineColor } from '@mantine/core';
import { MdOutlineScience, MdOutlineSoupKitchen } from 'react-icons/md';
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
	TbBrandCss3,
	TbBrandDocker,
	TbBrandFirebase,
	TbBrandGit,
	TbBrandGithub,
	TbBrandHtml5,
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
	TbCode,
	TbCodeCircle,
	TbFileDescription,
	TbHome,
	TbMail,
	TbWorldWww
} from 'react-icons/tb';
import { APP, FILE, NAV, TECH } from '../constants';

interface Props {
	type?: TECH | APP | FILE | NAV;
	size?: string | number;
	color?: DefaultMantineColor;
}

export default function Icon({ type, size, color }: Props) {
	switch (type) {
		case TECH.NODE:
			return <SiNodedotjs size={size} color={color} />;
		case TECH.TS:
			return <TbBrandTypescript size={size} color={color} />;
		case TECH.REACT:
			return <TbBrandReact size={size} color={color} />;
		case TECH.PSQL:
			return <SiPostgresql size={size} color={color} />;
		case TECH.JS:
			return <TbBrandJavascript size={size} color={color} />;
		case TECH.NEST:
			return <SiNestjs size={size} color={color} />;
		case TECH.NEXT:
			return <TbBrandNextjs size={size} color={color} />;
		case TECH.MANTINE:
			return <TbBrandMantine size={size} color={color} />;
		case TECH.REDIS:
			return <SiRedis size={size} color={color} />;
		case TECH.STRIPE:
			return <TbBrandStripe size={size} color={color} />;
		case TECH.MUI:
			return <SiMui size={size} color={color} />;
		case TECH.JWT:
			return <SiJsonwebtokens size={size} color={color} />;
		case TECH.EXPRESS:
			return <SiExpress size={size} color={color} />;
		case TECH.REDUX:
			return <TbBrandRedux size={size} color={color} />;
		case TECH.SOCKETIO:
			return <TbBrandSocketIo size={size} color={color} />;
		case TECH.HEROKU:
			return <SiHeroku size={size} color={color} />;
		case TECH.NODEMON:
			return <SiNodemon size={size} color={color} />;
		case TECH.PM2:
			return <SiPm2 size={size} color={color} />;
		case TECH.AWS:
			return <SiAmazonaws size={size} color={color} />;
		case TECH.NETLIFY:
			return <SiNetlify size={size} color={color} />;
		case TECH.GOOGLECLOUD:
			return <SiGooglecloud size={size} color={color} />;
		case TECH.DOCKER:
			return <TbBrandDocker size={size} color={color} />;
		case TECH.SWAGGER:
			return <SiSwagger size={size} color={color} />;
		case TECH.OPENAPI:
			return <SiOpenapiinitiative size={size} color={color} />;
		case TECH.POSTMAN:
			return <SiPostman size={size} color={color} />;
		case TECH.MOCHA:
			return <SiMocha size={size} color={color} />;
		case TECH.CHAI:
			return <SiChai size={size} color={color} />;
		case TECH.JEST:
			return <SiJest size={size} color={color} />;
		case TECH.SEQUELIZE:
			return <SiSequelize size={size} color={color} />;
		case TECH.PRISMA:
			return <TbBrandPrisma size={size} color={color} />;
		case TECH.PASSPORT:
			return <SiPassport size={size} color={color} />;
		case TECH.BOOTSTRAP:
			return <TbBrandBootstrap size={size} color={color} />;
		case TECH.JASMINE:
			return <SiJasmine size={size} color={color} />;
		case TECH.NPM:
			return <TbBrandNpm size={size} color={color} />;
		case TECH.YARN:
			return <SiYarn size={size} color={color} />;
		case TECH.LODASH:
			return <SiLodash size={size} color={color} />;
		case TECH.CHAKRAUI:
			return <SiChakraui size={size} color={color} />;
		case TECH.VITE:
			return <TbBrandVite size={size} color={color} />;
		case TECH.SQLITE:
			return <SiSqlite size={size} color={color} />;
		case TECH.FIREBASE:
			return <TbBrandFirebase size={size} color={color} />;
		case TECH.WEBPACK:
			return <SiWebpack size={size} color={color} />;
		case TECH.HTML:
			return <TbBrandHtml5 size={size} color={color} />;
		case TECH.CSS:
			return <TbBrandCss3 size={size} color={color} />;
		case TECH.ESLINT:
			return <SiEslint size={size} color={color} />;
		case TECH.PRETTIER:
			return <SiPrettier size={size} color={color} />;
		case TECH.RENDER:
			return <SiRender size={size} color={color} />;
		case TECH.VERCEL:
			return <TbBrandVercel size={size} color={color} />;
		case TECH.BEAUTIFUL_SOUP:
			return <MdOutlineSoupKitchen size={size} color={color} />;
		case TECH.VUE:
			return <TbBrandVue size={size} color={color} />;
		case TECH.PYTHON:
			return <TbBrandPython size={size} color={color} />;
		case TECH.FLASK:
			return <SiFlask size={size} color={color} />;
		case TECH.PANDAS:
			return <SiPandas size={size} color={color} />;
		case TECH.GUNICORN:
			return <SiGunicorn size={size} color={color} />;
		case TECH.TAILWIND:
			return <TbBrandTailwind size={size} color={color} />;
		case TECH.SQLALCHEMY:
			return <MdOutlineScience size={size} color={color} />;
		case TECH.GIT:
			return <TbBrandGit size={size} color={color} />;
		case APP.GITHUB:
			return <TbBrandGithub size={size} color={color} />;
		case APP.WEBSITE:
			return <TbWorldWww size={size} color={color} />;
		case APP.EMAIL:
			return <TbMail size={size} color={color} />;
		case APP.LINKEDIN:
			return <TbBrandLinkedin size={size} color={color} />;
		case NAV.RESUME:
			return <TbFileDescription size={size} color={color} />;
		case NAV.HOME:
			return <TbHome size={size} color={color} />;
		case NAV.PROJECTS:
			return <TbCodeCircle size={size} color={color} />;
		default:
			return <TbCode size={size} color={color} />;
	}
}
