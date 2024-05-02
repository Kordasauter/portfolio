import React, { useEffect, useRef } from 'react'
import { useContext } from 'react'
//Work component
import Work from '../Work/Work'
//work list from json
import works from '../../datas/Works.json'
//custom hook, return true if an element is on screen
import useOnScreen from '../../hooks/useOnScreen'
//context for nav bar
import { NavigationContext } from '../../context/context'

import { StyledH2 } from '../../styles/CommonStyle'
import './worksList.scss'

function WorksList(props) {
	const worksRef = useRef()
	//test if WorkList is visible
	const isVisible = useOnScreen(worksRef)
	const { setVisibility } = useContext(NavigationContext)

	useEffect(() => {
		setVisibility('Works', isVisible)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible])

	return (
		<section id='Works' ref={worksRef}>
			<StyledH2>Travaux</StyledH2>

			<div className='sites'>
				{works.map((work) => (
					<Work key={'key' + work.Title} work={work} />
				))}
			</div>
		</section>
	)
}

export default WorksList
