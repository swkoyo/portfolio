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
				profile: userData.profile
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
						id='profile'
						name='profile'
						placeholder='profile'
						as='textarea'
					/>
					{errors.profile && touched.profile ? (
						<div>{errors.profile}</div>
					) : null}

					<button type='submit' className='btn btn-primary'>
						Create
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
