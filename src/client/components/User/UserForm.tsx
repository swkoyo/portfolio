import { ComponentType } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useUserContext, UpdateUser } from '../../context/UserContext';
import { UpdateUserSchema } from '../../utils/Schema';

interface Props {
	handleShow: (data: boolean) => void;
}

const UserForm: ComponentType<Props> = (props) => {
	const { userData, updateUser } = useUserContext();

	return (
		<Formik
			initialValues={{
				tagline: userData.tagline,
				description: userData.description,
				picture_url: userData.avatar_url
			}}
			onSubmit={async (
				values: UpdateUser,
				{ setSubmitting, resetForm }: FormikHelpers<UpdateUser>
			) => {
				alert(JSON.stringify(values));
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
