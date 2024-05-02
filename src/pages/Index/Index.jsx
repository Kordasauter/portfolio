import React from 'react'

// import Banner from '../../components/Banner/Banner'
import AboutMe from '../../components/AboutMe/AboutMe'
import CompetencesList from '../../components/CompetencesList/CompetencesList'
import WorksList from '../../components/WorksList/WorksList'

// import Banner from '../../components/Banner/Banner'
// import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact/Contact'

// import Banner from '../../components/Banner/Banner'
// import Footer from '../../components/Footer/Footer'
// import { NavigationProvider } from '../../context/context'

function Index(props) {
	return (
		<div>
			{/* <NavigationProvider>
				<Banner /> */}
			<AboutMe />
			<CompetencesList />
			<WorksList />
			<Contact />
			{/* <Footer />
			</NavigationProvider> */}
		</div>
	)
}

export default Index
