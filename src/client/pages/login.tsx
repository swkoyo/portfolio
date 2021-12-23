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
					password: ''
				}}
				onSubmit={async (
					values: Values,
					{ setSubmitting }: FormikHelpers<Values>
				) => {
					try {
						await login(userData.email, values.password);
					} catch (err) {
						alert(err.message);
					}
					setSubmitting(false);
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
