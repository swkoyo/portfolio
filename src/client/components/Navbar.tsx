import { ComponentType } from 'react';
import { useUserContext } from '../context/UserContext';
import { useAuthContext } from '../context/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar: ComponentType = () => {
	const { userData } = useUserContext();
	const { auth, logout } = useAuthContext();
	const router = useRouter();

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
						<a
							className={`${
								router.pathname === '/' ? 'btn-active' : ''
							} btn btn-ghost btn-sm rounded-btn`}
						>
							Home
						</a>
					</Link>
					<Link href='/portfolio'>
						<a
							className={`${
								router.pathname.includes('/portfolio')
									? 'btn-active'
									: ''
							} btn btn-ghost btn-sm rounded-btn`}
						>
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
			<div className='px-2 mx-2 navbar-end'>
				{auth ? (
					<a
						className='btn btn-sm rounded-btn btn-error text-white'
						onClick={() => logout()}
					>
						Logout
					</a>
				) : (
					<Link href='/login'>
						<a className='btn btn-sm rounded-btn btn-primary text-white'>
							Login
						</a>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
