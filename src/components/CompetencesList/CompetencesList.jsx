import React, { useEffect, useRef } from 'react'
import Competence from '../Competence/Competence'

import useOnScreen from '../../hooks/useOnScreen'
import { useContext } from 'react'
import { NavigationContext } from '../../context/context'

import competences from '../../datas/Competences.json'
import './competencesList.scss'

function CompetencesList(props) {
	const Competences = useRef()
	//test if Contact is visible
	const isVisible = useOnScreen(Competences)

	const { setVisibility } = useContext(NavigationContext)

	useEffect(() => {
		if (isVisible) setVisibility('Competences', true)
		else setVisibility('Competences', false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible])

	return (
		<section id='Competences' ref={Competences}>
			<h2>Competences</h2>
			<div className='competencesContainer'>
				{/* <div className='list'> */}
				{competences.map((comp) => (
					<Competence key={'key' + comp.Image} competence={comp} />
				))}
				{/* </div> */}
			</div>
		</section>
	)
}

export default CompetencesList
