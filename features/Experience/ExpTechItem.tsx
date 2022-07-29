import { FC } from 'react';
import useTechIcon from '../../hooks/useTechIcon';

type Props = {
	tech: string;
};

const ExpTechItem: FC<Props> = ({ tech }) => {
	const Icon = useTechIcon({ tech });
	return <Icon size={50} />;
};

export default ExpTechItem;
