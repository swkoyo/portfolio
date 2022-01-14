import { ComponentType } from 'react';

const ScreenItem: ComponentType = ({ children }) => {
	return <div className='w-full h-screen p-24'>{children}</div>;
};

export default ScreenItem;
