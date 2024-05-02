import React from 'react'

import WorkModal from '../WorkModal/WorkModal'

import './work.scss'

function Work(props) {
	const [modalIsOpen, setIsOpen] = React.useState(false)
	function openModal() {
		setIsOpen(true)
	}

	function closeModal() {
		setIsOpen(false)
	}
	return (
		<div>
			<div onClick={openModal} className='work'>
				<img
					src={'/images/Sites/' + props.work.Title + '.png'}
					alt={props.work.Title}
				/>
				<p>{props.work.Title}</p>
			</div>
			<WorkModal
				work={props.work}
				closeModal={closeModal}
				modalIsOpen={modalIsOpen}
			/>
		</div>
	)
}

export default Work
