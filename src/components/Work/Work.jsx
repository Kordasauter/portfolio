import React from 'react'
import WorkModal from '../WorkModal/WorkModal'
import { Link } from 'react-router-dom'

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
		window.location.href = '/portfolio/work/' + props.work.id
	}

	return (
		<div>
			{window.innerWidth > 480 ? (
				<div onClick={openModal} className='work'>
					<img
						src={
							'/portfolio/images/Sites/' +
							props.work.Title +
							'.png'
						}
						alt={props.work.Title}
					/>
					<p>{props.work.Title}</p>
				</div>
			) : (
				<Link to={'/work/' + props.work.id} className='work'>
					<img
						src={
							'/portfolio/images/Sites/' +
							props.work.Title +
							'.png'
						}
						alt={props.work.Title}
					/>
					<p>{props.work.Title}</p>
				</Link>
			)}

			<WorkModal
				work={props.work}
				closeModal={closeModal}
				modalIsOpen={modalIsOpen}
			/>
		</div>
	)
}

export default Work
