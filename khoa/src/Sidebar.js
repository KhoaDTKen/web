
	import React from 'react';
	import './Sidebar.css';

	function Sidebar() {
	return (
	<aside className="sidebar">
	<ul>
	<li><a href="#dashboard">Bảng điều khiển</a></li>
	<li><a href="#profile">Profile</a></li>
	<li><a href="#settings">Cài Đặt</a></li>
	</ul>
	</aside>
	);
	}

	export default Sidebar;
