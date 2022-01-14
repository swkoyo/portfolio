import { ComponentType } from 'react';

const Navbar: ComponentType = () => {
	return (
		<div className='navbar mb-2 shadow-lg bg-neutral text-neutral-content sticky top-0'>
			<div className='flex-1 px-2 mx-2'>
				<a
					href='#Landing'
					className='text-lg font-bold hover:cursor-pointer'
				>
					{process.env.FULL_NAME}
				</a>
			</div>
			<div className='flex-none hidden px-2 mx-2 lg:flex'>
				<div className='flex items-stretch'>
					<a
						href='#About'
						className='btn btn-ghost btn-sm rounded-btn'
					>
						About
					</a>
					<a
						href='#Featured Projects'
						className='btn btn-ghost btn-sm rounded-btn'
					>
						Featured Projects
					</a>
					<a
						href='#Other Projects'
						className='btn btn-ghost btn-sm rounded-btn'
					>
						Other Projects
					</a>
					<a
						href='#Contact'
						className='btn btn-ghost btn-sm rounded-btn'
					>
						Contact
					</a>
				</div>
			</div>
		</div>
		// 	<div className='flex flex-row w-full shadow-lg bg-neutral text-neutral-content'>
		// 		<div className='navbar mx-auto w-full max-w-7xl'>
		// 			<div className='px-2 mx-2 navbar-start'>
		// 				<Link href='/'>
		// 					<span className='text-lg font-bold hover:cursor-pointer'>
		// 						{process.env.FULL_NAME}
		// 					</span>
		// 				</Link>
		// 			</div>
		// 			<div className='hidden px-2 mx-2 navbar-center sm:flex'>
		// 				<div className='flex items-stretch space-x-2'>
		// 					<Link href='/portfolio'>
		// 						<a
		// 							className={`${
		// 								router.pathname.includes('/portfolio')
		// 									? 'btn-active'
		// 									: ''
		// 							} btn btn-ghost btn-sm rounded-btn`}
		// 						>
		// 							Portfolio
		// 						</a>
		// 					</Link>
		// 				</div>
		// 			</div>
		// 			<div className='px-2 mx-2 navbar-end'>
		// 				<button className='sm:hidden btn btn-square btn-ghost group focus:btn-active relative z-50'>
		// 					<svg
		// 						xmlns='http://www.w3.org/2000/svg'
		// 						fill='none'
		// 						viewBox='0 0 24 24'
		// 						className='inline-block w-6 h-6 stroke-current'
		// 					>
		// 						<path
		// 							strokeLinecap='round'
		// 							strokeLinejoin='round'
		// 							strokeWidth='2'
		// 							d='M4 6h16M4 12h16M4 18h16'
		// 						></path>
		// 					</svg>
		// 					<div className='opacity-0 group-focus:opacity-100 absolute top-full right-0 menu shadow-log bg-base-100 rounded-box'>
		// 						<li>
		// 							<Link href='/portfolio'>
		// 								<a
		// 									className={`${
		// 										router.pathname.includes(
		// 											'/portfolio'
		// 										)
		// 											? 'btn-active'
		// 											: ''
		// 									} btn btn-ghost btn-md rounded-btn`}
		// 								>
		// 									Portfolio
		// 								</a>
		// 							</Link>
		// 						</li>
		// 					</div>
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>
	);
};

export default Navbar;
