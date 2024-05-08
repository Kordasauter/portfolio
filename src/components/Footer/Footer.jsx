import React, { useEffect, useRef } from 'react'

import colors from '../../styles/colors'
import styled from 'styled-components'

import useOnScreen from '../../hooks/useOnScreen'
import { useContext } from 'react'
import { NavigationContext } from '../../context/context'

//images
import Github from '../../assets/images/github.png'
import LinkedIn from '../../assets/images/linkedin.png'

import './footer.scss'

//test
import { useLocation } from 'react-router-dom'

const FooterContainer = styled.footer`
	// border: solid black 1px;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${colors.backgroundLight};
`

function Footer(props) {
	const footer = useRef()
	//test if Contact is visible
	const isVisible = useOnScreen(footer)
	const { setVisibility } = useContext(NavigationContext)

	//test
	const location = useLocation()
	const { pathname } = location

	useEffect(() => {
		if (isVisible) setVisibility('Footer', true)
		else setVisibility('Footer', false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible])

	return (
		<footer
			id='Footer'
			ref={footer}
			className={pathname === '/' ? '' : 'mobile'}
		>
			<a href='https://github.com/Kordasauter'>
				<img src={Github} alt='github' />
			</a>
			<a href='https://www.linkedin.com/in/mickael-vivens-83b98691/'>
				<img src={LinkedIn} alt='linkedin' />
			</a>
		</footer>
	)
}

export default Footer
