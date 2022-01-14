import { ComponentType } from 'react';
import { User } from '../models';
import ScreenItem from './ScreenItem';

interface Props {
	user: User;
}

const Contact: ComponentType<Props> = ({ user }) => {
	return (
		<ScreenItem id='Contact'>
			<div className='flex flex-col w-full h-full justify-center mx-auto space-y-4'>
				<div className='font-bold text-4xl'>Contact</div>
				<div>Please send me an email</div>
				<div>{user.email}</div>
			</div>
		</ScreenItem>
	);
};

export default Contact;
