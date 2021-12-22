import React, { useState } from 'react';
import { NextPage } from 'next';
import { useUserContext } from '../context/UserContext';
import { useAuthContext } from '../context/AuthContext';
import UserForm from '../components/User/UserForm';

const Index: NextPage = () => {
	const { auth } = useAuthContext();
	const { userData } = useUserContext();
	const [showFormModal, setShowFormModal] = useState(false);

	return (
		<div className='relative'>
			<div className={`modal ${showFormModal ? 'modal-open' : null}`}>
				<div className='modal-box'>
					<UserForm handleShow={setShowFormModal} />
				</div>
			</div>
			<div className='container mx-auto space-y-14 text-center'>
				{auth ? (
					<div
						className='absolute top-0 right-0 btn btn-primary'
						onClick={() => setShowFormModal(true)}
					>
						Edit
					</div>
				) : null}
				<div className='text-8xl uppercase'>{userData.full_name}</div>
				<div className='text-2xl uppercase'>{userData.tagline}</div>
				<div>{userData.description}</div>
			</div>
		</div>
	);
};

export default Index;
