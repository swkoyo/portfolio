import { ComponentType, useState } from 'react';
import { usePortfolioContext } from '../../context/PortfolioContext';
import { useAuthContext } from '../../context/AuthContext';
import TechnologyForm from './TechnologyForm';
import TechnologyLogo from './TechnologyLogo';

const TechnologyGrid: ComponentType = () => {
	const { auth } = useAuthContext();
	const { technologiesData, deleteTechnology } = usePortfolioContext();
	const [showFormModal, setShowFormModal] = useState(false);
	const [showUpdateModal, setShowUpdateModal] = useState(null);

	const handelShowFormModal = (show: boolean) => {
		setShowFormModal(show);
	};

	const closeModal = () => {
		setShowUpdateModal(null);
	};

	const handleDeleteTech = async (id: number) => {
		try {
			await deleteTechnology(id);
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<>
			<div className={`modal ${showUpdateModal ? 'modal-open' : null}`}>
				<div className='modal-box'>
					<TechnologyForm
						handleShow={closeModal}
						technology={showUpdateModal}
					/>
				</div>
			</div>
			<div className={`modal ${showFormModal ? 'modal-open' : null}`}>
				<div className='modal-box'>
					<TechnologyForm handleShow={handelShowFormModal} />
				</div>
			</div>
			<div className='grid grid-cols-4 md:grid-cols-2 gap-2 bg-neutral rounded-box p-4 h-full overflow-y-auto'>
				<div className='mx-auto col-span-full uppercase'>
					Technologies
				</div>
				{auth ? (
					<div
						key='add'
						className='btn bg-green-800 hover:bg-primary col-span-full border-none'
						onClick={() => handelShowFormModal(true)}
					>
						Add
					</div>
				) : null}
				{technologiesData.map((tech) => (
					<div
						key={tech.id}
						className='flex flex-row space-x-2 relative items-center'
					>
						<TechnologyLogo width={40} height={40} tech={tech} />
						<div className='hidden lg:flex uppercase text-2xs'>
							{tech.name}
						</div>
						{auth ? (
							<div className='absolute top-0 right-0 space-x-1'>
								<div
									className='btn btn-xs btn-circle btn-primary'
									onClick={() => setShowUpdateModal(tech)}
								>
									E
								</div>
								<div
									className='btn btn-xs btn-circle btn-error'
									onClick={() => handleDeleteTech(tech.id)}
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

export default TechnologyGrid;
