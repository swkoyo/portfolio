import { styled } from '@mui/material';
import { IconType } from 'react-icons';
import { MdOutlineEmail, MdWeb } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
import {
	SiAmazonaws,
	SiBootstrap,
	SiChai,
	SiChakraui,
	SiDocker,
	SiExpress,
	SiGithub,
	SiHeroku,
	SiJasmine,
	SiJest,
	SiJsonwebtokens,
	SiLinkedin,
	SiMaterialui,
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
	SiStripe,
	SiSwagger,
	SiTypescript,
	SiVite,
	SiYarn
} from 'react-icons/si';
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
			return StyledIcon(SiMaterialui, TECH_COLOR.MUI);
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
		default:
			return StyledIcon(RiComputerLine);
	}
};

export default useTechIcon;
