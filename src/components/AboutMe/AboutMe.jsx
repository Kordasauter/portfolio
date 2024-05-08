import React, { useEffect, useRef } from 'react'
import { StyledH2 } from '../../styles/CommonStyle'

import useOnScreen from '../../hooks/useOnScreen'
import { useContext } from 'react'
import { NavigationContext } from '../../context/context'

import './aboutMe.scss'

function AboutMe(props) {
	const aboutMe = useRef()
	//test if Contact is visible
	const isVisible = useOnScreen(aboutMe)
	const { setVisibility } = useContext(NavigationContext)

	useEffect(() => {
		// console.log(isVisible)
		if (isVisible) setVisibility('AboutMe', true)
		else setVisibility('AboutMe', false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible])
	return (
		// <ScrollSpy>
		<section id='Description' ref={aboutMe}>
			<div className='aboutMeContainer'>
				<div className='DescriptionContainer'>
					<StyledH2>À PROPOS DE MOI</StyledH2>
					<p>
						J'ai toujours développé pour le plaisir, mais après près
						de 8 ans dans l'administration système et réseau, j'ai
						eu l'opportunité de me spécialisé dans le développement
						web. C'est pourquoi j'ai suivi une formation qui m'aura
						permis de parfaire toutes les compétences nécessaire à
						ce type de poste.
					</p>
				</div>
				<div className='photoCV'>
					<div className='photo'>
						<img src='./images/photos/photo3.png' alt='moi' />
					</div>
					<a
						href='./downloads/CV_2024-05-01_Mickael_Vivens_dev_web.pdf'
						download='CV_Vivens_Mickael'
						className='CV'
					>
						Telecharger mon CV
					</a>
				</div>
			</div>
		</section>
		// {/* </ScrollSpy> */}
	)
}

export default AboutMe
