import { ComponentType } from 'react';
import { Technology } from '../../models';

interface Props {
	tech: Technology;
	[key: string]: any;
}

const TechnologyLogo: ComponentType<Props> = ({ tech, ...props }) => {
	return (
		<svg
			width={props.width ? props.width : 50}
			height={props.height ? props.height : 50}
		>
			<image
				width={props.width ? props.width : 50}
				height={props.height ? props.height : 50}
				href={tech.logo}
			/>
		</svg>
	);
};

export default TechnologyLogo;
