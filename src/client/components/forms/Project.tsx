import { ComponentType } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Project } from '../../models';

type NewProjectValues = Project;

interface Props {
	handleShow: (data: boolean) => void;
}

const ProjectForm: ComponentType<Props> = (props) => {
	return (
		<Formik
			initialValues={{
				name: '',
				description: '',
				repo_url: '',
				web_url: '',
				technologies: []
			}}
			onSubmit={(
				values: NewProjectValues,
				{ setSubmitting, resetForm }: FormikHelpers<NewProjectValues>
			) => {
				console.log('submit');
				// setTimeout(async () => {
				// 	const res = await fetch(
				// 		'http://localhost:3000/api/auth/login',
				// 		{
				// 			method: 'POST',
				// 			headers: {
				// 				'Content-Type':
				// 					'application/json'
				// 			},
				// 			body: JSON.stringify({
				// 				email: userData.email,
				// 				...values
				// 			})
				// 		}
				// 	);
				// 	const data = await res.json();

				// 	if (data.access_token) {
				// 		login(data.access_token);
				// 	}
				alert(JSON.stringify(values));
				setSubmitting(false);
				resetForm();
				// props.handleShow(false);
				// }, 500);
			}}
			onReset={() => {
				console.log('ehlol');
				props.handleShow(false);
			}}
		>
			<Form className='form-control'>
				<Field
					className='input'
					id='name'
					name='name'
					placeholder='name'
					type='text'
				/>

				<Field
					className='input'
					id='description'
					name='description'
					placeholder='description'
					type='text'
				/>

				<Field
					className='input'
					id='repo_url'
					name='repo_url'
					placeholder='repo url'
					type='text'
				/>

				<Field
					className='input'
					id='web_url'
					name='web_url'
					placeholder='web url'
					type='text'
				/>

				<Field
					className='input'
					id='technologies'
					name='technologies'
					placeholder='technologies'
					type='text'
				/>

				<button type='submit' className='btn btn-primary'>
					Login
				</button>
				<button type='reset' className='btn btn-primary'>
					Cancel
				</button>
			</Form>
		</Formik>
	);
};

export default ProjectForm;
