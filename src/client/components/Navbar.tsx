import { NextComponentType } from 'next';
import { useUserContext } from '../context/UserContext';
import Link from 'next/link';

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
					<Link href='/'>
						<a className='btn btn-ghost btn-sm rounded-btn'>Home</a>
					</Link>
					<Link href='/portfolio'>
						<a className='btn btn-ghost btn-sm rounded-btn'>
							Portfolio
						</a>
					</Link>
					<Link href='/'>
						<a className='btn btn-ghost btn-sm rounded-btn'>
							About
						</a>
					</Link>
					<Link href='/'>
						<a className='btn btn-ghost btn-sm rounded-btn'>
							Contact
						</a>
					</Link>
				</div>
			</div>
			<div className='navbar-end' />
		</div>
	);
};

export default Navbar;
