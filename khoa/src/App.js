	import React from 'react';
	import './App.css';
	import Header from './Header';
	import Sidebar from './Sidebar';
	import MainContent from './MainContent';
	import Footer from './Footer';

	function App() {
	return (
	<div className="App">
	<Header />
	<div className="layout">
	<Sidebar />
	<MainContent />
	</div>
	<Footer />
	</div>
	);
	}

	export default App;
