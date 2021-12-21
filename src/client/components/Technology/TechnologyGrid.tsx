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
				<div>Technologies</div>
				{auth ? (
					<div
						key='add'
						className='btn bg-green-300 col-span-2'
						onClick={() => handelShowFormModal(true)}
					>
						add
					</div>
				) : null}
				{technologiesData.map((tech, i) => (
					<div key={i} className='relative mx-auto'>
						<TechnologyLogo tech={tech} />
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
