import { NextComponentType } from 'next';
import { useUserContext } from '../context/UserContext';

const Navbar: NextComponentType = () => {
	const { userData } = useUserContext();

	return (
		<div className='navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box'>
			<div className='px-2 mx-2 navbar-start'>
				<span className='text-lg font-bold'>
					{userData.first_name} {userData.last_name}
				</span>
			</div>
			<div className='hidden px-2 mx-2 navbar-center lg:flex'>
				<div className='flex items-stretch'>
					<a className='btn btn-ghost btn-sm rounded-btn'>Home</a>
					<a className='btn btn-ghost btn-sm rounded-btn'>
						Portfolio
					</a>
					<a className='btn btn-ghost btn-sm rounded-btn'>About</a>
					<a className='btn btn-ghost btn-sm rounded-btn'>Contact</a>
				</div>
			</div>
			<div className='navbar-end' />
		</div>
	);
};

export default Navbar;
