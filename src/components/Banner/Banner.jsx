import React from 'react'
// import Scrollspy from 'react-scrollspy'

import { useContext } from 'react'
import { NavigationContext } from '../../context/context'

import './banner.scss'

function Banner(props) {
	const { currentSection } = useContext(NavigationContext)
	return (
		<header className='banner'>
			<div className='header'>
				<h1>VIVENS Mickaël</h1>
				{/* <span>{currentSection}</span> */}
				<nav>
					<ul>
						<li>
							{currentSection === 0 ? (
								<a href='./#Description' className='active'>
									Description
								</a>
							) : (
								<a href='./#Description'>Description</a>
							)}
						</li>
						<li>
							{currentSection === 1 ? (
								<a href='./#Competences' className='active'>
									Competences
								</a>
							) : (
								<a href='./#Competences'>Competences</a>
							)}
						</li>
						<li>
							{currentSection === 2 ? (
								<a href='./#Works' className='active'>
									Travaux
								</a>
							) : (
								<a href='./#Works'>Travaux</a>
							)}
						</li>
						<li>
							{currentSection === 3 ? (
								<a href='./#Contact' className='active'>
									Contact
								</a>
							) : (
								<a href='./#Contact'>Contact</a>
							)}
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Banner
