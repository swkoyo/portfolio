import { ComponentType, useState } from 'react';
import { usePortfolioContext } from '../../context/PortfolioContext';
import { useAuthContext } from '../../context/AuthContext';
import TechnologyForm from './TechnologyForm';
import TechnologyLogo from './TechnologyLogo';

const TechnologyGrid: ComponentType = () => {
	const { auth } = useAuthContext();
	const { technologiesData, deleteTechnology } = usePortfolioContext();
	const [showFormModal, setShowFormModal] = useState(false);

	const handelShowFormModal = (show: boolean) => {
		setShowFormModal(show);
	};

	return (
		<>
			<div className={`modal ${showFormModal ? 'modal-open' : null}`}>
				<div className='modal-box'>
					<TechnologyForm handleShow={handelShowFormModal} />
				</div>
			</div>
			<div className='grid grid-cols-2 gap-4 bg-neutral h-full rounded-box p-4'>
				<div className='col-span-2 uppercase'>Technologies</div>
				{auth ? (
					<div
						key='add'
						className='btn bg-green-800 hover:bg-primary col-span-2 border-none'
						onClick={() => handelShowFormModal(true)}
					>
						Add
					</div>
				) : null}
				{technologiesData.map((tech, i) => (
					<div key={i} className='relative'>
						<div className='flex flex-row space-x-2 items-center'>
							<TechnologyLogo tech={tech} />
							<div className='text-xs uppercase'>{tech.name}</div>
						</div>
						{auth ? (
							<div className='absolute top-0 right-0'>
								<div
									className='btn btn-xs btn-circle btn-error'
									onClick={() => deleteTechnology(tech.name)}
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
