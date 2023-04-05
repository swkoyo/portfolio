import { styled } from '@mui/material';
import { IconType } from 'react-icons';
import {
	MdOutlineArticle,
	MdOutlineEmail,
	MdWeb,
	MdOutlineSoupKitchen
} from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
import {
	SiAmazonaws,
	SiBootstrap,
	SiChai,
	SiChakraui,
	SiDocker,
	SiExpress,
	SiFirebase,
	SiGithub,
	SiHeroku,
	SiJasmine,
	SiJest,
	SiJsonwebtokens,
	SiLinkedin,
	SiMui,
	SiMocha,
	SiNestjs,
	SiNetlify,
	SiNextdotjs,
	SiNodedotjs,
	SiNpm,
	SiPassport,
	SiPostgresql,
	SiPostman,
	SiPrisma,
	SiReact,
	SiRedis,
	SiRedux,
	SiSequelize,
	SiSocketdotio,
	SiSqlite,
	SiStripe,
	SiSwagger,
	SiTypescript,
	SiVite,
	SiYarn,
	SiWebpack,
	SiEslint,
	SiPrettier,
	SiRender,
	SiVercel,
	SiLodash,
	SiGooglecloud,
	SiVuedotjs,
	SiPython,
	SiFlask,
	SiGunicorn,
	SiTailwindcss,
	SiPandas,
	SiGit
} from 'react-icons/si';
import ZodIcon from '../assets/ZodIcon';
import SqlAlchemyIcon from '../assets/SqlAlchemyIcon';
import MarshmallowIcon from '../assets/MarshmallowIcon';
import { TECH, TECH_COLOR } from '../constants';

type Props = {
	tech: string;
	useColor?: boolean;
	colorMode?: 'hover' | 'static';
};

const useTechIcon = ({ tech, useColor, colorMode = 'static' }: Props) => {
	const StyledIcon = (comp: IconType, color: string = 'white') =>
		styled(comp)({
			color: useColor && colorMode === 'static' ? color : 'white',
			':hover': {
				color: !useColor ? 'white' : color
			},
			transition: 'all .2s ease-in-out'
		});

	switch (tech) {
		case TECH.NODE_JS:
			return StyledIcon(SiNodedotjs, TECH_COLOR.NODE_JS);
		case TECH.TYPESCRIPT:
			return StyledIcon(SiTypescript, TECH_COLOR.TYPESCRIPT);
		case TECH.REACT:
			return StyledIcon(SiReact, TECH_COLOR.REACT);
		case TECH.POSTGRESQL:
			return StyledIcon(SiPostgresql, TECH_COLOR.POSTGRESQL);
		case TECH.NEST_JS:
			return StyledIcon(SiNestjs, TECH_COLOR.NEST_JS);
		case TECH.NEXT_JS:
			return StyledIcon(SiNextdotjs, TECH_COLOR.NEXT_JS);
		case TECH.REDIS:
			return StyledIcon(SiRedis, TECH_COLOR.REDIS);
		case TECH.STRIPE:
			return StyledIcon(SiStripe, TECH_COLOR.STRIPE);
		case TECH.MUI:
			return StyledIcon(SiMui, TECH_COLOR.MUI);
		case TECH.JWT:
			return StyledIcon(SiJsonwebtokens, TECH_COLOR.JWT);
		case TECH.EXPRESS:
			return StyledIcon(SiExpress, TECH_COLOR.EXPRESS);
		case TECH.REDUX:
			return StyledIcon(SiRedux, TECH_COLOR.REDUX);
		case TECH.SOCKET_IO:
			return StyledIcon(SiSocketdotio, TECH_COLOR.SOCKET_IO);
		case TECH.HEROKU:
			return StyledIcon(SiHeroku, TECH_COLOR.HEROKU);
		case TECH.AWS:
			return StyledIcon(SiAmazonaws, TECH_COLOR.AWS);
		case TECH.NETLIFY:
			return StyledIcon(SiNetlify, TECH_COLOR.NETLIFY);
		case TECH.GOOGLE_CLOUD:
			return StyledIcon(SiGooglecloud, TECH_COLOR.GOOGLE_CLOUD);
		case TECH.DOCKER:
			return StyledIcon(SiDocker, TECH_COLOR.DOCKER);
		case TECH.SWAGGER:
			return StyledIcon(SiSwagger, TECH_COLOR.SWAGGER);
		case TECH.POSTMAN:
			return StyledIcon(SiPostman, TECH_COLOR.POSTMAN);
		case TECH.MOCHA:
			return StyledIcon(SiMocha, TECH_COLOR.MOCHA);
		case TECH.CHAI:
			return StyledIcon(SiChai, TECH_COLOR.CHAI);
		case TECH.JEST:
			return StyledIcon(SiJest, TECH_COLOR.JEST);
		case TECH.SEQUELIZE:
			return StyledIcon(SiSequelize, TECH_COLOR.SEQUELIZE);
		case TECH.PRISMA:
			return StyledIcon(SiPrisma, TECH_COLOR.PRISMA);
		case TECH.PASSPORT:
			return StyledIcon(SiPassport, TECH_COLOR.PASSPORT);
		case TECH.BOOTSTRAP:
			return StyledIcon(SiBootstrap, TECH_COLOR.BOOTSTRAP);
		case TECH.JASMINE:
			return StyledIcon(SiJasmine, TECH_COLOR.JASMINE);
		case TECH.NPM:
			return StyledIcon(SiNpm, TECH_COLOR.NPM);
		case TECH.YARN:
			return StyledIcon(SiYarn, TECH_COLOR.YARN);
		case TECH.GITHUB:
			return StyledIcon(SiGithub, TECH_COLOR.GITHUB);
		case TECH.LODASH:
			return StyledIcon(SiLodash, TECH_COLOR.LODASH);
		case TECH.WEB:
			return StyledIcon(MdWeb);
		case TECH.EMAIL:
			return StyledIcon(MdOutlineEmail);
		case TECH.LINKEDIN:
			return StyledIcon(SiLinkedin, TECH_COLOR.LINKEDIN);
		case TECH.CHAKRA_UI:
			return StyledIcon(SiChakraui, TECH_COLOR.CHAKRA_UI);
		case TECH.VITE:
			return StyledIcon(SiVite, TECH_COLOR.VITE);
		case TECH.SQLITE:
			return StyledIcon(SiSqlite, TECH_COLOR.SQLITE);
		case TECH.FIREBASE:
			return StyledIcon(SiFirebase, TECH_COLOR.FIREBASE);
		case TECH.ZOD:
			return StyledIcon(ZodIcon, TECH_COLOR.ZOD);
		case TECH.WEBPACK:
			return StyledIcon(SiWebpack, TECH_COLOR.WEBPACK);
		case TECH.ESLINT:
			return StyledIcon(SiEslint, TECH_COLOR.ESLINT);
		case TECH.PRETTIER:
			return StyledIcon(SiPrettier, TECH_COLOR.PRETTIER);
		case TECH.RENDER:
			return StyledIcon(SiRender, TECH_COLOR.RENDER);
		case TECH.VERCEL:
			return StyledIcon(SiVercel, TECH_COLOR.VERCEL);
		case TECH.BEAUTIFUL_SOUP:
			return StyledIcon(MdOutlineSoupKitchen);
		case TECH.VUE:
			return StyledIcon(SiVuedotjs, TECH_COLOR.VUE);
		case TECH.PYTHON:
			return StyledIcon(SiPython, TECH_COLOR.PYTHON);
		case TECH.FLASK:
			return StyledIcon(SiFlask);
		case TECH.PANDAS:
			return StyledIcon(SiPandas, TECH_COLOR.PANDAS);
		case TECH.GUNICORN:
			return StyledIcon(SiGunicorn, TECH_COLOR.GUNICORN);
		case TECH.TAILWIND:
			return StyledIcon(SiTailwindcss, TECH_COLOR.TAILWIND);
		case TECH.MARSHMALLOW:
			return StyledIcon(MarshmallowIcon);
		case TECH.SQL_ALCHEMY:
			return StyledIcon(SqlAlchemyIcon, TECH_COLOR.SQL_ALCHEMY);
		case TECH.GIT:
			return StyledIcon(SiGit, TECH_COLOR.GIT);
		case TECH.RESUME:
			return StyledIcon(MdOutlineArticle);
		default:
			return StyledIcon(RiComputerLine);
	}
};

export default useTechIcon;
