import { ComponentType } from 'react';
import { getLogo } from '../utils/logos';

interface Props {
	type: string;
	url: string;
}

const SvgLink: ComponentType<Props> = ({ type, url }) => {
	return (
		<div className='group'>
			<svg className='block mx-auto rounded-full' width={60} height={60}>
				<a target='_blank' href={url} rel='noopener noreferrer'>
					<image width={60} height={60} href={getLogo(type)} />
				</a>
			</svg>
			<div className='mt-2 opacity-0 group-hover:opacity-100 text-sm font-bold uppercase'>
				{type}
			</div>
		</div>
	);
};

export default SvgLink;
