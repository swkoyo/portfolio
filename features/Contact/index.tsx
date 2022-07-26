import {
	Box,
	Button,
	Container,
	Stack,
	TextField,
	Typography
} from '@mui/material';
import type { NextComponentType } from 'next';
import { useState } from 'react';
import SectionContainer from '../../components/SectionContainer';

const Contact: NextComponentType = () => {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	return (
		<SectionContainer title='Contact'>
			<Stack>
				<Typography>
					Have a question or want to work together? Leave your details
					and I&apos;ll get back to you as soon as possible.
				</Typography>
				<TextField
					label='Name'
					variant='outlined'
					onChange={(e) => setName(e.target.value)}
				>
					{name}
				</TextField>
				<TextField
					label='Email'
					variant='outlined'
					onChange={(e) => setEmail(e.target.value)}
				>
					{email}
				</TextField>
				<TextField
					label='Message'
					variant='outlined'
					onChange={(e) => setMessage(e.target.value)}
					multiline
					rows={8}
				>
					{message}
				</TextField>
				<Button variant='contained'>Submit</Button>
			</Stack>
		</SectionContainer>
	);
};

export default Contact;
