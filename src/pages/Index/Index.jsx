import React from 'react'

import AboutMe from '../../components/AboutMe/AboutMe'
import CompetencesList from '../../components/CompetencesList/CompetencesList'
import WorksList from '../../components/WorksList/WorksList'

import Contact from '../../components/Contact/Contact'

function Index(props) {
	return (
		<main>
			<AboutMe />
			<CompetencesList />
			<WorksList />
			<Contact />
		</main>
	)
}

export default Index
