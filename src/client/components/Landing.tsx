import { ComponentType } from 'react';
import { User } from '../models';
import ScreenItem from './ScreenItem';

interface Props {
	user: User;
}

const About: ComponentType<Props> = ({ user }) => {
	return (
		<ScreenItem>
			<div className='flex flex-col w-full h-full justify-center mx-auto space-y-4'>
				<div className='text-md'>Hi, my name is</div>
				<div className='text-7xl font-bold'>{user.full_name}</div>
				<div className='text-4xl font-bold'>{user.tagline}</div>
				<div className='text-md'>{user.description}</div>
			</div>
		</ScreenItem>
	);
};

export default About;
