import React from 'react'

import Modal from 'react-modal'

import './workModal.scss'

function WorkModal(props) {
	let key = 0
	return (
		<Modal
			isOpen={props.modalIsOpen}
			onRequestClose={props.closeModal}
			className='modal'
		>
			<div className='modalDiv'>
				<h2>{props.work.Title}</h2>
				<div className='modalBody'>
					<img
						className='siteImg'
						src={'/images/Sites/' + props.work.Title + '.png'}
						alt={props.work.Title}
					/>
					<span className='separationBar' />
					<div className='description'>
						<div>
							<h3>{props.work.Type}</h3>
							<span>
								{props.work.Description.map((text) => (
									<span key={'desc' + key++}>
										{text}
										<br />
									</span>
								))}
							</span>
						</div>
						<div>
							<h3>Technologies utilisées</h3>
							{props.work.Technologies.map((tech) => (
								<img
									className='logoImg'
									src={'/images/logos/' + tech + '.png'}
									key={'tech' + key++}
									alt={'logo ' + tech}
								/>
							))}
						</div>
					</div>
				</div>
				<h4>Voir le site :</h4>
				<div className='siteURLContainer'>
					<a href={props.work.URL} target='_blank' rel='noreferrer'>
						{props.work.Title}
					</a>
				</div>
				<span className='closeButton' onClick={props.closeModal}>
					<i class='fa-solid fa-x'></i>
				</span>
			</div>
		</Modal>
	)
}

export default WorkModal
