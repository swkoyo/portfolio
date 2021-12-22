import { ComponentType } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Project } from '../../models';
import {
	usePortfolioContext,
	AddProjectData
} from '../../context/PortfolioContext';
import Select from 'react-select';
import { CreateProjectSchema } from '../../utils/Schema';

interface Props {
	handleShow: (data: boolean) => void;
	project?: Project;
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
				values: AddProjectData,
				{ setSubmitting, resetForm }: FormikHelpers<AddProjectData>
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
				<Form className='form-control space-y-4'>
					<Field
						className='input border-white'
						id='name'
						name='name'
						placeholder='name'
						as='input'
					/>
					{errors.name && touched.name ? (
						<div className='text-xs text-red-600'>
							{errors.name}
						</div>
					) : null}

					<Field
						className='textarea h-24 border-white'
						id='description'
						name='description'
						placeholder='description'
						as='textarea'
					/>
					{errors.description && touched.description ? (
						<div className='text-xs text-red-600'>
							{errors.description}
						</div>
					) : null}

					<Field
						className='input border-white'
						id='repo_url'
						name='repo_url'
						placeholder='repo url'
						as='input'
					/>
					{errors.repo_url && touched.repo_url ? (
						<div className='text-xs text-red-600'>
							{errors.repo_url}
						</div>
					) : null}

					<Field
						className='input border-white'
						id='web_url'
						name='web_url'
						placeholder='web url'
						as='input'
					/>
					{errors.web_url && touched.web_url ? (
						<div className='text-xs text-red-600'>
							{errors.web_url}
						</div>
					) : null}

					<Select
						className='w-full text-black'
						id='technologies'
						name='technologies'
						instanceId='technologies'
						placeholder='technologies'
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
						<div className='text-xs text-red-600'>
							{errors.technologies}
						</div>
					) : null}

					<button type='submit' className='btn btn-success'>
						Create
					</button>
					<button type='reset' className='btn btn-error'>
						Cancel
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default ProjectForm;
