import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingButton } from '@mui/lab';
import { Stack, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import type { NextComponentType } from 'next';
import { useSnackbar } from 'notistack';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useIntersectionObserver } from 'usehooks-ts';
import { z } from 'zod';
import SectionContainer from '../../components/SectionContainer';
import { EMAILJS } from '../../constants';

const schema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	message: z.string().min(1)
});

const Contact: NextComponentType = () => {
	const form = useRef();
	const [isLoading, setIsLoading] = useState(false);
	const { enqueueSnackbar } = useSnackbar();
	const [isShown, setShown] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);
	const entry = useIntersectionObserver(ref, {});

	useEffect(() => {
		if (entry?.isIntersecting) {
			setShown(true);
		}
	}, [entry]);

	const {
		control,
		reset,
		formState: { errors, isValid }
	} = useForm<z.infer<typeof schema>>({
		defaultValues: {
			email: '',
			name: '',
			message: ''
		},
		mode: 'onChange',
		resolver: zodResolver(schema)
	});

	const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
		setIsLoading(true);
		e.preventDefault();
		await emailjs.sendForm(
			EMAILJS.SERVICE_ID,
			EMAILJS.TEMPLATE_ID,
			e.currentTarget,
			EMAILJS.PUB_KEY
		);
		setIsLoading(false);
		enqueueSnackbar('Email sent!', { variant: 'success' });
		reset();
	};

	return (
		<SectionContainer title='Contact'>
			<motion.div
				ref={ref}
				initial={{
					opacity: 0,
					scale: 0.5
				}}
				animate={{
					opacity: isShown ? 1 : 0,
					scale: isShown ? 1 : 0.5
				}}
				transition={{ duration: 0.5 }}
			>
				<Stack maxWidth={700} rowGap={4}>
					<Typography variant='h5' textAlign='center'>
						Have a question or want to work together? Leave your
						details and I&apos;ll get back to you as soon as
						possible.
					</Typography>
					<Stack
						component='form'
						rowGap={1}
						ref={form}
						onSubmit={sendEmail}
					>
						<Controller
							name='name'
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									disabled={isLoading}
									label='Name'
									variant='outlined'
									error={!!errors.name}
								/>
							)}
						/>
						<Controller
							name='email'
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									disabled={isLoading}
									label='Email'
									variant='outlined'
									error={!!errors.email}
								/>
							)}
						/>
						<Controller
							name='message'
							control={control}
							render={({ field }) => (
								<TextField
									{...field}
									disabled={isLoading}
									label='Message'
									variant='outlined'
									multiline
									rows={8}
									error={!!errors.message}
								/>
							)}
						/>
						<LoadingButton
							loading={isLoading}
							disabled={!isValid}
							type='submit'
							variant='contained'
						>
							Submit
						</LoadingButton>
					</Stack>
				</Stack>
			</motion.div>
		</SectionContainer>
	);
};

export default Contact;
