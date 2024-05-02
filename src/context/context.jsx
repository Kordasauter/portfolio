import { createContext, useEffect, useState } from 'react'

export const NavigationContext = createContext()

export const NavigationProvider = ({ children }) => {
	const [currentSection, setCurrentSection] = useState(0)

	const [aboutMe, setAboutMe] = useState(false)
	const [competences, setCompetences] = useState(false)
	const [works, setWorks] = useState(false)
	const [contact, setContact] = useState(false)
	const [footer, setFooter] = useState(false)

	const setVisibility = (element, isVisible) => {
		switch (element) {
			case 'AboutMe':
				setAboutMe(isVisible)
				break
			case 'Competences':
				setCompetences(isVisible)
				break
			case 'Works':
				setWorks(isVisible)
				break
			case 'Contact':
				setContact(isVisible)
				break
			case 'Footer':
				setFooter(isVisible)
				break
			default:
				break
		}
	}

	const changeSection = (change) => {
		if (change === 'add') {
			setCurrentSection(currentSection + 1)
		} else if (change === 'subtract' && currentSection > 0) {
			setCurrentSection(currentSection - 1)
		}
	}
	const sectionSet = (section) => {
		setCurrentSection(section)
	}
	// useEffect(() => {
	// 	window.scrollTo(0, 0)
	// }, [])

	useEffect(() => {
		if (aboutMe) setCurrentSection(0)
		else if (competences) setCurrentSection(1)
		else if (works) setCurrentSection(2)
		else if (contact) setCurrentSection(3)
		if (footer) setCurrentSection(3)
	}, [aboutMe, competences, works, contact, footer])

	return (
		<NavigationContext.Provider
			value={{
				contact,
				aboutMe,
				competences,
				works,
				currentSection,
				setVisibility,
				changeSection,
				sectionSet,
			}}
		>
			{children}
		</NavigationContext.Provider>
	)
}
