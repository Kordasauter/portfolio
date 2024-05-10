import React from 'react'

import AboutMe from '../../components/AboutMe/AboutMe'
import CompetencesList from '../../components/CompetencesList/CompetencesList'
import WorksList from '../../components/WorksList/WorksList'

import Contact from '../../components/Contact/Contact'

function Index(props) {
	return (
		<div>
			<AboutMe />
			<CompetencesList />
			<WorksList />
			<Contact />
		</div>
	)
}

export default Index
