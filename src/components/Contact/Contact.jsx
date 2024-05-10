import React, { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.scss'

import useOnScreen from '../../hooks/useOnScreen'
import { useContext } from 'react'
import { NavigationContext } from '../../context/context'

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

	return (
		<section id='Contact' ref={form}>
			<h2>CONTACT</h2>
			<form onSubmit={sendEmail}>
				<div className='nameMail'>
					<div className='smallInput'>
						<label>Nom</label>
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
	)
}

export default Contact
