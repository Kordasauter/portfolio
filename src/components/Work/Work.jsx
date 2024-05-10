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
	const redirect = () => {
		window.location.href = '/work/' + props.work.id
	}

	return (
		<div>
			<div
				onClick={window.innerWidth > 480 ? openModal : redirect}
				className='work'
			>
				<img
					src={'/portfolio/images/Sites/' + props.work.Title + '.png'}
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
