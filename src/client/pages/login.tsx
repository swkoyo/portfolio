import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useAuthContext } from '../context/AuthContext';
import { useUserContext } from '../context/UserContext';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';

interface Values {
	password: string;
}

const Login: NextPage = () => {
	const router = useRouter();
	const { userData } = useUserContext();
	const { auth, login } = useAuthContext();

	useEffect(() => {
		if (auth) {
			router.push('/');
		}
	}, [auth]);

	return (
		<div className='p-10 card bg-base-200'>
			<Formik
				initialValues={{
					password: 'password'
				}}
				onSubmit={(
					values: Values,
					{ setSubmitting }: FormikHelpers<Values>
				) => {
					setTimeout(async () => {
						const res = await fetch(
							'http://localhost:3000/api/auth/login',
							{
								method: 'POST',
								headers: {
									'Content-Type': 'application/json'
								},
								body: JSON.stringify({
									email: userData.email,
									...values
								})
							}
						);
						const data = await res.json();

						if (data.access_token) {
							login(data.access_token);
						}
						alert(JSON.stringify(data, null, 2));
						setSubmitting(false);
					}, 500);
				}}
			>
				<Form className='form-control'>
					<Field
						className='input'
						id='password'
						name='password'
						placeholder='Password'
						type='password'
					/>

					<button type='submit' className='btn btn-primary'>
						Login
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default Login;
