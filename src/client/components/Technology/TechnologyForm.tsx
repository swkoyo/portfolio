import { ComponentType, useEffect, useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Technology } from '../../models';
import {
	usePortfolioContext,
	AddTechnologyData
} from '../../context/PortfolioContext';
import {
	CreateTechnologySchema,
	UpdateTechnologySchema
} from '../../utils/schema';

interface Props {
	handleShow: (data: boolean) => void;
	technology?: Technology;
	setTechnologies: (data: Technology[]) => void;
	token: string;
}

const TechnologyForm: ComponentType<Props> = ({
	handleShow,
	setTechnologies,
	token,
	...props
}) => {
	const [technology, setTechnology] = useState(props.technology);

	useEffect(() => {
		if (props.technology) {
			setTechnology(props.technology);
		}
	}, [props.technology]);

	const handleAdd = async (data): Promise<Technology> => {
		const res = await fetch(`${process.env.API_URL}/technologies`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify(data)
		});

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data.message);
		}

		const techRes = await fetch(`${process.env.API_URL}/technologies`);
		const techs = await techRes.json();

		return techs;
	};

	const handleUpdate = async (id, data): Promise<Technology> => {
		const res = await fetch(`${process.env.API_URL}/technologies`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify({ id, data })
		});

		if (!res.ok) {
			const data = await res.json();
			throw new Error(data.message);
		}

		const techRes = await fetch(`${process.env.API_URL}/technologies`);
		const techs = await techRes.json();

		return techs;
	};

	return (
		<Formik
			enableReinitialize
			initialValues={{
				name: technology?.name || '',
				logo_url: technology?.logo_url || ''
			}}
			onSubmit={async (
				values: AddTechnologyData,
				{ setSubmitting, resetForm }: FormikHelpers<AddTechnologyData>
			) => {
				let technologies;
				try {
					technologies = technology
						? await handleUpdate(technology.id, values)
						: await handleAdd(values);
					alert(`Technology ${technology ? 'updated' : 'created'}`);
				} catch (err) {
					alert(err.message);
				}
				setSubmitting(false);
				resetForm();
				handleShow(technology ? null : false);
				if (technologies) setTechnologies(technologies);
			}}
			validationSchema={
				technology ? UpdateTechnologySchema : CreateTechnologySchema
			}
		>
			{({ errors, touched }) => (
				<Form className='form-control space-y-4'>
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
						id='logo_url'
						name='logo_url'
						placeholder='logo_url'
						as='input'
					/>
					{errors.logo_url && touched.logo_url ? (
						<div>{errors.logo_url}</div>
					) : null}

					<button type='submit' className='btn btn-primary'>
						{technology ? 'Update' : 'Create'}
					</button>
					<button
						type='reset'
						className='btn btn-primary'
						onClick={() => handleShow(technology ? null : false)}
					>
						Cancel
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default TechnologyForm;
