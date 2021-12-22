import { ComponentType, useEffect, useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Project } from '../../models';
import {
	usePortfolioContext,
	AddProjectData,
	UpdateProjectData
} from '../../context/PortfolioContext';
import Select from 'react-select';
import { CreateProjectSchema, UpdateProjectSchema } from '../../utils/Schema';

interface Props {
	handleShow: (data: boolean) => void;
	project?: Project;
}

const ProjectForm: ComponentType<Props> = (props) => {
	const { technologiesData, addProject, updateProject } =
		usePortfolioContext();
	const [project, setProject] = useState(props.project);

	const options = technologiesData.map((tech) => ({
		value: tech.name,
		label: tech.name
	}));

	useEffect(() => {
		if (props.project) {
			setProject(props.project);
		}
	}, [props.project]);

	return (
		<Formik
			initialValues={
				project
					? {
							name: project.name,
							description: project.description
					  }
					: {
							name: '',
							description: '',
							technologies: []
					  }
			}
			onSubmit={async (
				values: AddProjectData,
				{ setSubmitting, resetForm }: FormikHelpers<AddProjectData>
			) => {
				alert(JSON.stringify(values));
				project
					? await updateProject(project.id, values)
					: await addProject(values);
				setSubmitting(false);
				resetForm();
				props.handleShow(false);
			}}
			validationSchema={
				project ? UpdateProjectSchema : CreateProjectSchema
			}
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

					{!project ? (
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
					) : null}
					{!project && errors.technologies && touched.technologies ? (
						<div className='text-xs text-red-600'>
							{errors.technologies}
						</div>
					) : null}

					<button type='submit' className='btn btn-success'>
						{project ? 'Update' : 'Create'}
					</button>
					<button
						type='reset'
						className='btn btn-error'
						onClick={() => props.handleShow(false)}
					>
						Cancel
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default ProjectForm;
