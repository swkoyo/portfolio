import { ComponentType, useEffect, useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Project } from '../../models';
import {
	usePortfolioContext,
	AddProjectData,
	UpdateProjectData
} from '../../context/PortfolioContext';
import Select from 'react-select';
import { CreateProjectSchema, UpdateProjectSchema } from '../../utils/schema';
import { isNil, omitBy } from 'lodash';

interface Props {
	handleShow: (data: boolean) => void;
	project?: Project;
}

const ProjectForm: ComponentType<Props> = (props) => {
	const { technologiesData, addProject, updateProject } =
		usePortfolioContext();
	const [project, setProject] = useState(props.project);

	const options = technologiesData.map((tech) => ({
		value: tech.id,
		label: tech.name
	}));

	useEffect(() => {
		if (props.project) {
			setProject(props.project);
		}
	}, [props.project]);

	return (
		<Formik
			enableReinitialize
			initialValues={
				project
					? {
							name: project.name,
							description: project.description,
							tagline: project.tagline,
							link_urls: project.link_urls
					  }
					: {
							name: '',
							description: '',
							tagline: '',
							link_urls: {},
							technologies: []
					  }
			}
			onSubmit={async (
				values: AddProjectData,
				{ setSubmitting, resetForm }: FormikHelpers<AddProjectData>
			) => {
				values.link_urls = omitBy(values.link_urls, (value) => !value);
				try {
					project
						? await updateProject(project.id, values)
						: await addProject(values);
					alert(`Project ${project ? 'updated' : 'created'}`);
				} catch (err) {
					alert(err.message);
				}
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
						className='input border-white'
						id='tagline'
						name='tagline'
						placeholder='tagline'
						as='input'
					/>
					{errors.tagline && touched.tagline ? (
						<div className='text-xs text-red-600'>
							{errors.tagline}
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
						id='link_urls.website'
						name='link_urls.website'
						placeholder='website_url'
						as='input'
					/>
					{errors['link_urls.website'] &&
					touched['link_urls.website'] ? (
						<div>{errors['link_urls.website']}</div>
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
