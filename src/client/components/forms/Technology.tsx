import { ComponentType } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Technology } from '../../models';
import cookieCutter from 'cookie-cutter';
import { usePortfolioContext } from '../../context/PortfolioContext';
import { CreateTechnologySchema } from './Schema';

type NewTechnologyValues = Technology;

interface Props {
	handleShow: (data: boolean) => void;
}

const postTechnology = async (values: NewTechnologyValues) => {
	const res = await fetch('http://localhost:3000/api/technologies', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${cookieCutter.get('token')}`
		},
		body: JSON.stringify(values)
	});
	const data = await res.json();
	return data;
};

const TechnologyForm: ComponentType<Props> = (props) => {
	const { technologiesData, handleTechnologiesData } = usePortfolioContext();
	return (
		<Formik
			initialValues={{
				name: '',
				logo: ''
			}}
			onSubmit={async (
				values: NewTechnologyValues,
				{ setSubmitting, resetForm }: FormikHelpers<NewTechnologyValues>
			) => {
				alert(JSON.stringify(values));
				const data = await postTechnology(values);
				handleTechnologiesData([...technologiesData, data]);
				setSubmitting(false);
				resetForm();
			}}
			onReset={() => {
				console.log('ehlol');
				props.handleShow(false);
			}}
			validationSchema={CreateTechnologySchema}
		>
			{({ errors, touched }) => (
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
						className='input'
						id='logo'
						name='logo'
						placeholder='logo'
						as='input'
					/>
					{errors.logo && touched.logo ? (
						<div>{errors.logo}</div>
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

export default TechnologyForm;
