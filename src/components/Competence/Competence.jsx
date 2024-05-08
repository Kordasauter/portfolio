import React from 'react'

import './competence.scss'

function Competence(props) {
	return (
		<div className='competence'>
			<img
				src={'/images/logos/' + props.competence.Image + '.png'}
				alt={props.competence.Image + ' logo'}
			/>
			<div className='progressBarAndCertificat'>
				<div className='progressBar'>
					<progress max='100' value={props.competence.Note} />
				</div>

				{props.competence.Certificat ? (
					<div className='certificat'>
						<div className='organisme'>
							{props.competence.isParcours === true ? (
								<i className='fa-solid fa-user-graduate badge'></i>
							) : (
								<i className='fa-solid fa-award badge'></i>
							)}
							<span>{props.competence.Organisme}</span>
						</div>
						{/* <span className='separation'>-</span> */}
						<span className='certificatText'>
							{props.competence.Certificat}
						</span>
					</div>
				) : (
					<div className='certificat'>Autodidacte</div>
				)}
			</div>
		</div>
	)
}

export default Competence
