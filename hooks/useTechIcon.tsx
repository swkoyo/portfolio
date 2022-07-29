import { styled } from '@mui/material';
import { IconType } from 'react-icons';
import {
	SiNodedotjs,
	SiTypescript,
	SiReact,
	SiPostgresql,
	SiNestjs,
	SiNextdotjs,
	SiRedis,
	SiStripe,
	SiMaterialui,
	SiJsonwebtokens,
	SiExpress,
	SiSocketdotio,
	SiHeroku,
	SiAmazonaws,
	SiNetlify,
	SiDocker,
	SiSwagger,
	SiPostman,
	SiMocha,
	SiChai,
	SiJest,
	SiSequelize,
	SiPrisma,
	SiRedux,
	SiPassport,
	SiBootstrap,
	SiJasmine,
	SiNpm,
	SiYarn,
	SiGithub
} from 'react-icons/si';
import { RiComputerLine } from 'react-icons/ri';
import { MdWeb, MdOutlineEmail } from 'react-icons/md';
import { TECH } from '../constants';

type Props = {
	tech: string;
};

const useTechIcon = ({ tech }: Props) => {
	const StyledIcon = (comp: IconType) => styled(comp)({});

	switch (tech) {
		case TECH.NODE_JS:
			return StyledIcon(SiNodedotjs);
		case TECH.TYPESCRIPT:
			return StyledIcon(SiTypescript);
		case TECH.REACT:
			return StyledIcon(SiReact);
		case TECH.POSTGRESQL:
			return StyledIcon(SiPostgresql);
		case TECH.NEST_JS:
			return StyledIcon(SiNestjs);
		case TECH.NEXT_JS:
			return StyledIcon(SiNextdotjs);
		case TECH.REDIS:
			return StyledIcon(SiRedis);
		case TECH.STRIPE:
			return StyledIcon(SiStripe);
		case TECH.MUI:
			return StyledIcon(SiMaterialui);
		case TECH.JWT:
			return StyledIcon(SiJsonwebtokens);
		case TECH.EXPRESS:
			return StyledIcon(SiExpress);
		case TECH.REDUX:
			return StyledIcon(SiRedux);
		case TECH.SOCKET_IO:
			return StyledIcon(SiSocketdotio);
		case TECH.HEROKU:
			return StyledIcon(SiHeroku);
		case TECH.AWS:
			return StyledIcon(SiAmazonaws);
		case TECH.NETLIFY:
			return StyledIcon(SiNetlify);
		case TECH.DOCKER:
			return StyledIcon(SiDocker);
		case TECH.SWAGGER:
			return StyledIcon(SiSwagger);
		case TECH.POSTMAN:
			return StyledIcon(SiPostman);
		case TECH.MOCHA:
			return StyledIcon(SiMocha);
		case TECH.CHAI:
			return StyledIcon(SiChai);
		case TECH.JEST:
			return StyledIcon(SiJest);
		case TECH.SEQUELIZE:
			return StyledIcon(SiSequelize);
		case TECH.PRISMA:
			return StyledIcon(SiPrisma);
		case TECH.PASSPORT:
			return StyledIcon(SiPassport);
		case TECH.BOOTSTRAP:
			return StyledIcon(SiBootstrap);
		case TECH.JASMINE:
			return StyledIcon(SiJasmine);
		case TECH.NPM:
			return StyledIcon(SiNpm);
		case TECH.YARN:
			return StyledIcon(SiYarn);
		case TECH.GITHUB:
			return StyledIcon(SiGithub);
		case TECH.WEB:
			return StyledIcon(MdWeb);
		case TECH.EMAIL:
			return StyledIcon(MdOutlineEmail);
		default:
			return StyledIcon(RiComputerLine);
	}
};

export default useTechIcon;
