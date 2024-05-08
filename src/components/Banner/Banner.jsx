import React from 'react'
// import Scrollspy from 'react-scrollspy'

import { useContext } from 'react'
import { NavigationContext } from '../../context/context'

import './banner.scss'

//test
import { useLocation } from 'react-router-dom'

function Banner(props) {
	const { currentSection } = useContext(NavigationContext)
	//test
	const location = useLocation()
	const { pathname } = location

	return (
		<header className='banner'>
			<div className='header'>
				<h1>
					Mickaël VIVENS
					<span className='Job'> - Développeur Web</span>
				</h1>
				{pathname === '/' ? (
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
				) : (
					<div></div>
				)}
			</div>
		</header>
	)
}

export default Banner
