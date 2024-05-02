import React from 'react'

import './competence.scss'

function Competence(props) {
	return (
		<div className='competence'>
			<img
				src={'/images/logos/' + props.competence.Image + '.png'}
				alt={props.competence.Image + ' logo'}
			/>
			<div className='column'>
				{/* <span>{props.competence.Nom}</span> */}
				<progress max='100' value={props.competence.Note} />
			</div>
		</div>
	)
}

export default Competence
