import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Modal from 'react-modal'

import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import { NavigationProvider } from './context/context'
//Composants communs

//Pages
import Index from './pages/Index/Index'
import Work from './pages/Work/Work'

import './index.css'

import reportWebVitals from './reportWebVitals'

Modal.setAppElement('#root')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<NavigationProvider>
				<Banner />
				<Routes>
					<Route path='/portfolio/work/:id' element={<Work />} />
					<Route exact path='/portfolio/' element={<Index />} />
				</Routes>
				<Footer />
			</NavigationProvider>
		</BrowserRouter>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
