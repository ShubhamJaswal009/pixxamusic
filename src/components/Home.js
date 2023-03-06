import React from 'react';
import SongCard from './SongCard';

function Home() {
	return (
		<div
			className='container'
			style={{
				display: 'flex',
				justifyContent: 'center'
			}}
		>
			<SongCard />
		</div>
	);
}

export default Home;
