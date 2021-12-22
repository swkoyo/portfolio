import { ComponentType } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useUserContext, UpdateUser } from '../../context/UserContext';
import { UpdateUserSchema } from '../../utils/schema';
import { omitBy } from 'lodash';

interface Props {
	handleShow: (data: boolean) => void;
}

const UserForm: ComponentType<Props> = (props) => {
	const { userData, updateUser } = useUserContext();

	return (
		<Formik
			enableReinitialize
			initialValues={{
				tagline: userData.tagline,
				description: userData.description,
				avatar_url: userData.avatar_url,
				link_urls: userData.link_urls
			}}
			onSubmit={async (
				values: UpdateUser,
				{ setSubmitting, resetForm }: FormikHelpers<UpdateUser>
			) => {
				alert(JSON.stringify(values));
				values.link_urls = omitBy(values.link_urls, (value) => !value);
				await updateUser(values);
				setSubmitting(false);
				resetForm();
			}}
			onReset={() => {
				console.log('ehlol');
				props.handleShow(false);
			}}
			validationSchema={UpdateUserSchema}
		>
			{({ errors, touched }) => (
				<Form className='form-control space-y-4'>
					<Field
						className='input border-white'
						id='tagline'
						name='tagline'
						placeholder='tagline'
						as='input'
					/>
					{errors.tagline && touched.tagline ? (
						<div>{errors.tagline}</div>
					) : null}

					<Field
						className='textarea h-24 border-white'
						id='description'
						name='description'
						placeholder='description'
						as='textarea'
					/>
					{errors.description && touched.description ? (
						<div>{errors.description}</div>
					) : null}

					<Field
						className='input border-white'
						id='avatar_url'
						name='avatar_url'
						placeholder='avatar_url'
						as='input'
					/>
					{errors.avatar_url && touched.avatar_url ? (
						<div>{errors.avatar_url}</div>
					) : null}

					<Field
						className='input border-white'
						id='link_urls.github'
						name='link_urls.github'
						placeholder='github_url'
						as='input'
					/>
					{errors['link_urls.github'] &&
					touched['link_urls.github'] ? (
						<div>{errors['link_urls.github']}</div>
					) : null}

					<Field
						className='input border-white'
						id='link_urls.linkedin'
						name='link_urls.linkedin'
						placeholder='linkedin_url'
						as='input'
					/>
					{errors['link_urls.linkedin'] &&
					touched['link_urls.linkedin'] ? (
						<div>{errors['link_urls.linkedin']}</div>
					) : null}

					<Field
						className='input border-white'
						id='link_urls.resume'
						name='link_urls.resume'
						placeholder='resume_url'
						as='input'
					/>
					{errors['link_urls.resume'] &&
					touched['link_urls.resume'] ? (
						<div>{errors['link_urls.resume']}</div>
					) : null}

					<button type='submit' className='btn btn-primary'>
						Update
					</button>
					<button type='reset' className='btn btn-primary'>
						Cancel
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default UserForm;
