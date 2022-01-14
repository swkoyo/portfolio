import { ComponentType } from 'react';

interface Props {
	id: string;
}

const ScreenItem: ComponentType<Props> = ({ id, children }) => {
	return (
		<div id={id} className='w-full h-screen p-24'>
			{children}
		</div>
	);
};

export default ScreenItem;
