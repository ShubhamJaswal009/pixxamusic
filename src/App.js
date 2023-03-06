import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route element={<Home />} path='/home' />
				</Routes>
				<Routes>
					<Route element={<About />} path='/about' />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
