import React, { useState } from 'react';
import ReactMusicPlayer from './ReactMusicPlayer';

function Songs() {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseEnter = () => {
		setIsHovering(true);
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
	};
	return (
		// <div
		// 	style={{
		// 		margin: '40px',
		// 		width: '330px',

		// 		boxShadow: isHovering ? '0px 0px 30px 1px rgba(0, 255, 117, 0.30)' : '',
		// 		backgroundImage: 'black',
		// 		// isHovering
		// 		// ?
		// 		// 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)',
		// 		// : ''
		// 		borderRadius: '10px',
		// 		transition: isHovering ? 'all 0.2s' : 'all 0.2s',
		// 		transform: isHovering ? 'scale(0.95)' : ''
		// 	}}
		// 	onMouseEnter={handleMouseEnter}
		// 	onMouseLeave={handleMouseLeave}
		// >
		<div
			className='card my-5'
			style={{
				width: '325px',
				height: '400px',
				borderRadius: '10px',
				transition: isHovering ? 'all 0.2s' : 'all 0.2s',
				transform: isHovering ? 'scale(0.95)' : '',
				boxShadow: isHovering ? '0px 0px 50px 1px red' : ''
			}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<img
				src='musiccard.jpg'
				className='card-img-top'
				alt='logo'
				style={{ width: '325px', height: '230px' }}
			/>
			<div className='card-body'>
				{/* <SeekBar /> */}
				<ReactMusicPlayer />
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						margin: '25px'
					}}
				></div>
			</div>
		</div>
		// </div>
	);
}

export default Songs;
