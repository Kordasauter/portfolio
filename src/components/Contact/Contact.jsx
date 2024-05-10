import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact.scss'

import useOnScreen from '../../hooks/useOnScreen'
import { useContext } from 'react'
import { NavigationContext } from '../../context/context'

function Contact(props) {
	// let success = false
	// let fail = false
	const [success, setSuccess] = useState(false)
	const [fail, setFail] = useState(false)
	//send e mail
	const sendEmail = (e) => {
		e.preventDefault()
		console.log(form)
		emailjs
			.sendForm('service_9intz6x', 'template_etlfva5', form.current, {
				publicKey: '22blyaDc5w6TQyX7i',
			})
			.then(
				() => {
					console.log('SUCCESS!')
					setSuccess(true)
					setFail(false)
				},
				(error) => {
					console.log('FAILED...', error.text)
					setSuccess(false)
					setFail(true)
				}
			)
	}
	const contact = useRef()
	const form = useRef()
	//test if Contact is visible
	const isVisible = useOnScreen(form)
	const { setVisibility } = useContext(NavigationContext)

	useEffect(() => {
		if (isVisible) setVisibility('Contact', true)
		else setVisibility('Contact', false)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible])
	useEffect(() => {
		console.log(success)
	}, [success, fail])

	return (
		<section id='Contact' ref={contact}>
			<h2>CONTACT</h2>
			<form onSubmit={sendEmail} ref={form}>
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
				<input
					type='submit'
					value='Envoyer'
					className={success ? 'invisible' : ''}
				/>
				<div className='mailStatus'>
					<p className={success ? 'success' : 'invisible'}>
						message envoyé avec succès
					</p>
					<p className={fail ? 'fail' : 'invisible'}>
						échec de l'envoie du message
					</p>
				</div>
			</form>
		</section>
	)
}

export default Contact
