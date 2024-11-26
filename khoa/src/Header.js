	import React from 'react';
	import './Header.css';

	function Header() {
	return (
        	<header className="header">
		<div className='videosBackground'>
			<video autoPlay muted loop>
				<source src='/Sasuke.mp4' type='video/mp4'/>
				Trận chiến của 2 thằng gennin
			</video>
		</div>
	<div className="logo">Uchiha Sasuke</div>
	<nav className="nav">
	<a href="#home">Trang Chủ</a>
	<a href="#about">Về chúng tôi</a>
	<a href="#services">Dịch vụ</a>
	<a href="#contact">Liên hệ</a>
	</nav>
</header>
	);
}

export default Header;
