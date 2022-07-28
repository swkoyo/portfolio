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
	SiRedux
} from 'react-icons/si';
import { RiComputerLine } from 'react-icons/ri';

type Props = {
	icon: string;
};

const StyledIcon = (comp: IconType) => styled(comp)();

const TechIcon = ({ icon }: Props) => {
	switch (icon) {
		case 'Node.js':
			return StyledIcon(SiNodedotjs);
		case 'Typescript':
			return StyledIcon(SiTypescript);
		case 'React':
			return StyledIcon(SiReact);
		case 'PostgreSQL':
			return StyledIcon(SiPostgresql);
		case 'NestJS':
			return StyledIcon(SiNestjs);
		case 'Next.js':
			return StyledIcon(SiNextdotjs);
		case 'Redis':
			return StyledIcon(SiRedis);
		case 'Stripe':
			return StyledIcon(SiStripe);
		case 'Material UI':
			return StyledIcon(SiMaterialui);
		case 'JWT':
			return StyledIcon(SiJsonwebtokens);
		case 'Express':
			return StyledIcon(SiExpress);
		case 'Redux':
			return StyledIcon(SiRedux);
		case 'Socket.io':
			return StyledIcon(SiSocketdotio);
		case 'Heroku':
			return StyledIcon(SiHeroku);
		case 'AWS':
			return StyledIcon(SiAmazonaws);
		case 'Netlify':
			return StyledIcon(SiNetlify);
		case 'Docker':
			return StyledIcon(SiDocker);
		case 'Swagger':
			return StyledIcon(SiSwagger);
		case 'Postman':
			return StyledIcon(SiPostman);
		case 'Mocha':
			return StyledIcon(SiMocha);
		case 'Chai':
			return StyledIcon(SiChai);
		case 'Jest':
			return StyledIcon(SiJest);
		case 'Sequelize':
			return StyledIcon(SiSequelize);
		case 'Prisma':
			return StyledIcon(SiPrisma);
		default:
			return StyledIcon(RiComputerLine);
	}
};

export default TechIcon;
