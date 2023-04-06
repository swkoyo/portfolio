import { rem } from '@mantine/core';

export default function Logo({ remVal }: { remVal: number }) {
	return (
		<svg
			width={rem(remVal)}
			viewBox='0 0 64 64'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			aria-hidden='true'
			role='img'
			className='iconify iconify--emojione-monotone'
			preserveAspectRatio='xMidYMid meet'
		>
			<path
				d='M33.609 21.068h-7.736v8.408h7.736c2.354 0 4.268-1.887 4.268-4.203c0-2.318-1.913-4.205-4.268-4.205'
				fill='currentColor'
			></path>
			<path
				d='M33.609 34.523h-7.736v8.408h7.736c2.354 0 4.268-1.887 4.268-4.205s-1.913-4.203-4.268-4.203'
				fill='currentColor'
			></path>
			<path
				d='M52 2H12C6.477 2 2 6.476 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.524-4.477-10-10-10zm-9 36.727c0 5.102-4.211 9.25-9.391 9.25L21 48V16l12.609.023c5.18 0 9.391 4.148 9.391 9.25c0 2.648-1.137 5.04-2.956 6.727C41.863 33.688 43 36.078 43 38.727z'
				fill='currentColor'
			></path>
		</svg>
	);
}
