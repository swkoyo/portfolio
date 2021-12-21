import { ComponentType, useState } from 'react';
import { usePortfolioContext } from '../../context/PortfolioContext';
import { useAuthContext } from '../../context/AuthContext';
import cookieCutter from 'cookie-cutter';
import TechnologyForm from './TechnologyForm';

const deleteTechnology = async (name: string) => {
	await fetch(
		`http://localhost:3000/api/technologies?name=${encodeURIComponent(
			name
		)}`,
		{
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${cookieCutter.get('token')}`
			}
		}
	);
};

const TechnologyCarousel: ComponentType = () => {
	const { auth } = useAuthContext();
	const { technologiesData, refreshData } = usePortfolioContext();
	const [showFormModal, setShowFormModal] = useState(false);

	const handelShowFormModal = (show: boolean) => {
		setShowFormModal(show);
	};

	const handleDeleteTech = async (name) => {
		await deleteTechnology(name);
		await refreshData();
	};

	return (
		<>
			<div className={`modal ${showFormModal ? 'modal-open' : null}`}>
				<div className='modal-box'>
					<TechnologyForm handleShow={handelShowFormModal} />
				</div>
			</div>
			<div className='w-full p-4 space-x-4 carousel carousel-center bg-neutral rounded-box'>
				{auth ? (
					<div
						key='add'
						className='carousel-item btn bg-green-300'
						onClick={() => handelShowFormModal(true)}
					>
						add
					</div>
				) : null}
				{technologiesData.map((tech, i) => (
					<div key={i} className='carousel-item relative'>
						<div className='btn btn-primary'>{tech.name}</div>
						{auth ? (
							<div className='absolute top-0 right-0'>
								<div
									className='btn btn-xs btn-circle btn-error'
									onClick={() => handleDeleteTech(tech.name)}
								>
									X
								</div>
							</div>
						) : null}
					</div>
				))}
			</div>
		</>
	);
};

export default TechnologyCarousel;
