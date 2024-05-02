import React, { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { StyledH2 } from '../../styles/CommonStyle'
import './contact.scss'

import useOnScreen from '../../hooks/useOnScreen'
import { useContext } from 'react'
import { NavigationContext } from '../../context/context'

// import ScrollSpy from 'react-ui-scrollspy'

function Contact(props) {
	//send e mail
	const sendEmail = (e) => {
		e.preventDefault()
		emailjs
			.sendForm('service_9intz6x', 'template_etlfva5', form.current, {
				publicKey: '22blyaDc5w6TQyX7i',
			})
			.then(
				() => {
					console.log('SUCCESS!')
				},
				(error) => {
					console.log('FAILED...', error.text)
				}
			)
	}
	const form = useRef()
	//test if Contact is visible
	const isVisible = useOnScreen(form)
	const { setVisibility } = useContext(NavigationContext)

	useEffect(() => {
		if (isVisible) setVisibility('Contact', true)
		else setVisibility('Contact', false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible])
	// const { currentSection, changeSection } = useContext(NavigationContext)

	// useEffect(() => {
	// 	if (isVisible) {
	// 	} else if (currentSection === 3) changeSection('subtract')
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [isVisible])

	return (
		// <ScrollSpy>
		<section id='Contact' ref={form}>
			<StyledH2>CONTACT</StyledH2>
			<form onSubmit={sendEmail}>
				<div className='nameMail'>
					<div className='smallInput'>
						<label>Nom</label>
						{/* <input type="text" name="user_name" /> */}
						<input type='text' name='from_name' />
					</div>

					<div className='smallInput'>
						<label>E-mail</label>
						<input type='email' name='user_email' />
					</div>
				</div>
				<div>
					<label>Message</label>
					<textarea name='message' />
				</div>
				<input type='submit' value='Envoyer' />
			</form>
		</section>
		// {/* </ScrollSpy> */}
	)
}

export default Contact
