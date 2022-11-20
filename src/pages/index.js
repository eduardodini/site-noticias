import React from 'react';
import NewsBox from '../components/newsbox/newsbox';

const Main = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
		<NewsBox />
		<NewsBox />
		<NewsBox />
		<NewsBox />
	</div>
);
};

export default Main;
