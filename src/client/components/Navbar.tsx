import { ComponentType } from 'react';
import { useUserContext } from '../context/UserContext';
import { useAuthContext } from '../context/AuthContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FULL_NAME } from '../config';

const Navbar: ComponentType = () => {
	// const { userData } = useUserContext();
	// const { auth, logout } = useAuthContext();
	const router = useRouter();

	// const handleLogout = () => {
	// 	alert('Logged Out');
	// 	logout();
	// };

	return (
		<div className='flex flex-row w-full shadow-lg bg-neutral text-neutral-content rounded-box mb-2'>
			<div className='navbar mx-auto w-full max-w-7xl'>
				<div className='px-2 mx-2 navbar-start'>
					<Link href='/'>
						<span className='text-lg font-bold hover:cursor-pointer'>
							{FULL_NAME}
						</span>
					</Link>
				</div>
				<div className='hidden px-2 mx-2 navbar-center sm:flex'>
					<div className='flex items-stretch space-x-2'>
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
						{/* <Link href='/'>
						<a className='btn btn-ghost btn-sm rounded-btn'>
							Resume
						</a>
					</Link>
					<Link href='/'>
						<a className='btn btn-ghost btn-sm rounded-btn'>
							Contact
						</a>
					</Link> */}
					</div>
				</div>
				{/* <div className='px-2 mx-2 navbar-end'>
					{auth ? (
						<a
							className='hidden sm:flex btn btn-sm rounded-btn btn-error text-white'
							onClick={() => handleLogout()}
						>
							Logout
						</a>
					) : null}
					<button className='sm:hidden btn btn-square btn-ghost group focus:btn-active relative z-50'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							className='inline-block w-6 h-6 stroke-current'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h16'
							></path>
						</svg>
						<div className='opacity-0 group-focus:opacity-100 absolute top-full right-0 menu shadow-log bg-base-100 rounded-box'>
							<li>
								<Link href='/portfolio'>
									<a
										className={`${
											router.pathname.includes(
												'/portfolio'
											)
												? 'btn-active'
												: ''
										} btn btn-ghost btn-md rounded-btn`}
									>
										Portfolio
									</a>
								</Link>
							</li>
							{auth ? (
								<li>
									<a
										className='btn btn-error btn-md rounded-btn border-none'
										onClick={() => handleLogout()}
									>
										Logout
									</a>
								</li>
							) : null}
						</div>
					</button>
				</div> */}
			</div>
		</div>
	);
};

export default Navbar;
