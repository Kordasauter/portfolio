import React from 'react'
import { useParams } from 'react-router-dom'

import workList from '../../datas/Works.json'

//style
import './work.scss'

function Work(props) {
	const param = useParams()
	const work = workList.find((work) => work.id === parseInt(param.id))

	let key = 0
	return (
		<div id='WorkPage'>
			<div className='pageHeader'>
				<h2>{work.Title}</h2>
				<a className='closeButton' href='../../#Works'>
					<i className='fa-solid fa-x'></i>
				</a>
			</div>
			<div className='pageBody'>
				<img
					className='SiteImage'
					src={'/portfolio/images/Sites/' + work.Title + '.png'}
					alt={work.pictures}
				/>
				<div className='descText'>
					<h3>{work.Type}</h3>
					<span>
						{work.Description.map((text) => (
							<span key={'desc' + key++}>
								{text}
								<br />
							</span>
						))}
					</span>
				</div>
				<div className='descTech'>
					<h3>Technologies utilisées</h3>
					<div>
						{work.Technologies.map((tech) => (
							<img
								className='logoImg'
								src={'/portfolio/images/logos/' + tech + '.png'}
								key={'tech' + key++}
								alt={'logo ' + tech}
							/>
						))}
					</div>
				</div>
				<div className='siteURLContainer'>
					<h4>Voir le site :</h4>
					<div className='URL'>
						<a href={work.URL} target='_blank' rel='noreferrer'>
							{work.Title}{' '}
							<i className='fa-solid fa-up-right-from-square'></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Work
