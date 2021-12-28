import { ComponentType, useState } from 'react';
import { Project } from '../../models';
import TechnologyLogo from '../Technology/TechnologyLogo';
import { useAuthContext } from '../../context/AuthContext';
import ProjectForm from './ProjectForm';
import { usePortfolioContext } from '../../context/PortfolioContext';
import { differenceBy, pickBy } from 'lodash';
import SvgLink from '../SvgLink';

interface Props {
	project: Project;
}

const ProjectPage: ComponentType<Props> = ({ project }) => {
	// const { auth } = useAuthContext();
	// const { technologiesData, removeProjectTechnology, addProjectTechnology } =
	// 	usePortfolioContext();
	// const [showFormModal, setShowFormModal] = useState(false);
	// const [showAddTechModal, setShowAddTechModal] = useState(false);

	// const handleAddTech = async (tech) => {
	// 	try {
	// 		await addProjectTechnology(project.id, tech.id);
	// 	} catch (err) {
	// 		alert(err.message);
	// 	}
	// 	setShowAddTechModal(false);
	// };

	// const handleRemoveTech = async (id: number) => {
	// 	try {
	// 		await removeProjectTechnology(project.id, id);
	// 	} catch (err) {
	// 		alert(err.message);
	// 	}
	// };

	// const possibleTechs = differenceBy(
	// 	technologiesData,
	// 	project.technologies,
	// 	'name'
	// );

	return (
		<>
			{/* <div className={`modal ${showFormModal ? 'modal-open' : null}`}>
				<div className='modal-box'>
					<ProjectForm
						handleShow={setShowFormModal}
						project={project}
					/>
				</div>
			</div>
			<div className={`modal ${showAddTechModal ? 'modal-open' : null}`}>
				<div className='modal-box'>
					<div className='grid grid-cols-2 gap-4'>
						{possibleTechs.map((tech) => (
							<div
								key={tech.id}
								className='flex flex-row space-x-2 items-center rounded-box bg-primary p-2 hover:cursor-pointer hover:bg-green-500'
								onClick={() => handleAddTech(tech)}
							>
								<TechnologyLogo tech={tech} />
								<div className='text-sm uppercase'>
									{tech.name}
								</div>
							</div>
						))}
					</div>
					<div
						className='mt-4 btn btn-error col-span-2 border-none hover:bg-pink-600 w-full'
						onClick={() => setShowAddTechModal(false)}
					>
						Cancel
					</div>
				</div>
			</div> */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4 relative mx-auto w-full max-w-7xl'>
				{/* {auth ? (
					<div
						className='absolute top-0 left-0 btn btn-primary'
						onClick={() => setShowFormModal(true)}
					>
						Edit
					</div>
				) : null} */}
				<div className='text-4xl md:text-8xl text-center uppercase col-span-1 md:col-span-2'>
					{project.name}
				</div>
				<div className='md:row-span-2'>
					<div className='grid grid-cols-4 md:grid-cols-2 gap-4 bg-neutral h-full rounded-box p-4'>
						<div className='mx-auto col-span-full uppercase'>
							Technologies
						</div>
						{/* {auth ? (
							<div
								key='add'
								className='btn bg-green-800 hover:bg-primary col-span-full border-none'
								onClick={() => setShowAddTechModal(true)}
							>
								Add
							</div>
						) : null} */}
						{project.technologies.map((tech, i) => (
							<div key={i} className='relative'>
								<div className='flex flex-row space-x-2 items-center'>
									{/* {auth ? (
										<div className='absolute top-0 right-0'>
											<div
												className='btn btn-xs btn-circle btn-error'
												onClick={() =>
													handleRemoveTech(tech.id)
												}
											>
												X
											</div>
										</div>
									) : null} */}
									<TechnologyLogo
										width={40}
										height={40}
										tech={tech}
									/>
									<div className='hidden lg:flex text-2xs uppercase'>
										{tech.name}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='text-center text-lg uppercase font-bold md:col-span-2'>
					{project.tagline}
				</div>
				<div className='flex flex-row mx-auto space-x-2 md:col-span-2'>
					{Object.entries(
						pickBy(project.link_urls, (value) => !!value)
					).map(([key, value]) => (
						<SvgLink key={key} type={key} url={value} />
					))}
				</div>
				<div className='text-center md:col-span-3 mt-4'>
					{project.description}
				</div>
			</div>
		</>
	);
};

export default ProjectPage;
