import { ComponentType } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Project } from '../../models';
import { usePortfolioContext } from '../../context/PortfolioContext';
import Select from 'react-select';
import { CreateProjectSchema } from '../forms/Schema';

type NewProjectValues = Project;

interface Props {
	handleShow: (data: boolean) => void;
}

const ProjectForm: ComponentType<Props> = (props) => {
	const { technologiesData, addProject } = usePortfolioContext();
	const options = technologiesData.map((tech) => ({
		value: tech.name,
		label: tech.name
	}));

	return (
		<Formik
			initialValues={{
				name: '',
				description: '',
				repo_url: '',
				web_url: '',
				technologies: []
			}}
			onSubmit={async (
				values: NewProjectValues,
				{ setSubmitting, resetForm }: FormikHelpers<NewProjectValues>
			) => {
				alert(JSON.stringify(values));
				await addProject(values);
				setSubmitting(false);
				resetForm();
			}}
			onReset={() => {
				console.log('ehlol');
				props.handleShow(false);
			}}
			validationSchema={CreateProjectSchema}
		>
			{({ setFieldValue, errors, touched }) => (
				<Form className='form-control'>
					<Field
						className='input'
						id='name'
						name='name'
						placeholder='name'
						as='input'
					/>
					{errors.name && touched.name ? (
						<div>{errors.name}</div>
					) : null}

					<Field
						className='textarea h-24'
						id='description'
						name='description'
						placeholder='description'
						as='textarea'
					/>
					{errors.description && touched.description ? (
						<div>{errors.description}</div>
					) : null}

					<Field
						className='input'
						id='repo_url'
						name='repo_url'
						placeholder='repo url'
						as='input'
					/>
					{errors.repo_url && touched.repo_url ? (
						<div>{errors.repo_url}</div>
					) : null}

					<Field
						className='input'
						id='web_url'
						name='web_url'
						placeholder='web url'
						as='input'
					/>
					{errors.web_url && touched.web_url ? (
						<div>{errors.web_url}</div>
					) : null}

					<Select
						className='w-full'
						id='technologies'
						name='technologies'
						instanceId='technologies'
						isMulti={true}
						onChange={(v) =>
							setFieldValue(
								'technologies',
								v.map((tech) => tech.value)
							)
						}
						options={options}
					/>
					{errors.technologies && touched.technologies ? (
						<div>{errors.technologies}</div>
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

export default ProjectForm;
