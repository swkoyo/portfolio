import { ComponentType, useEffect, useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Technology } from '../../models';
import { usePortfolioContext } from '../../context/PortfolioContext';
import {
	CreateTechnologySchema,
	UpdateTechnologySchema
} from '../../utils/Schema';

type NewTechnologyValues = Technology;

interface Props {
	handleShow: (data: boolean | string) => void;
	technology?: Technology;
}

const TechnologyForm: ComponentType<Props> = (props) => {
	const { addTechnology, updateTechnology } = usePortfolioContext();
	const [technology, setTechnology] = useState(props.technology);

	useEffect(() => {
		if (props.technology) {
			setTechnology(props.technology);
		}
	}, [props.technology]);

	return (
		<Formik
			enableReinitialize={true}
			initialValues={{
				name: technology?.name || '',
				logo: technology?.logo || ''
			}}
			onSubmit={async (
				values: NewTechnologyValues,
				{ setSubmitting, resetForm }: FormikHelpers<NewTechnologyValues>
			) => {
				alert(JSON.stringify(values));
				technology
					? await updateTechnology(technology.name, values)
					: await addTechnology(values);
				setSubmitting(false);
				resetForm();
				props.handleShow(false);
			}}
			validationSchema={
				technology ? UpdateTechnologySchema : CreateTechnologySchema
			}
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
						{technology ? 'Update' : 'Create'}
					</button>
					<button
						type='reset'
						className='btn btn-primary'
						onClick={() => props.handleShow(false)}
					>
						Cancel
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default TechnologyForm;
