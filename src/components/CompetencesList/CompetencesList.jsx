import React, { useEffect, useRef } from 'react'
import Competence from '../Competence/Competence'

import useOnScreen from '../../hooks/useOnScreen'
import { useContext } from 'react'
import { NavigationContext } from '../../context/context'

import competences from '../../datas/Competences.json'
import './competencesList.scss'

function CompetencesList(props) {
	const Competences = useRef()
	// const CompSection = useRef()
	//test if Contact is visible
	const isVisible = useOnScreen(Competences)
	// const sectionIsVisible = useOnScreen(CompSection)

	const { setVisibility } = useContext(NavigationContext)

	useEffect(() => {
		if (isVisible) setVisibility('Competences', true)
		else setVisibility('Competences', false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible])
	// const { currentSection, changeSection, sectionSet } =
	// 	useContext(NavigationContext)

	// useEffect(() => {
	// 	//mobile
	// 	// if (window.innerWidth < 481) {
	// 	// 	if (sectionIsVisible) {
	// 	// 		sectionSet(1)
	// 	// 	} else {
	// 	// 		// if (currentSection === 1) changeSection('add')
	// 	// 	}
	// 	// } else {
	// 	// 	if (isVisible) {
	// 	// 		if (currentSection === 2) changeSection('subtract')
	// 	// 	} else {
	// 	// 		if (currentSection === 1) changeSection('add')
	// 	// 	}
	// 	// }

	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [isVisible])

	return (
		<section id='Competences' ref={Competences}>
			{/* <StyledDiv> */}
			<h2>Competences</h2>
			<div className='competencesContainer'>
				{competences.map((comp) => (
					<Competence key={'key' + comp.Image} competence={comp} />
				))}
			</div>
			{/* </StyledDiv> */}
		</section>
	)
}

export default CompetencesList
