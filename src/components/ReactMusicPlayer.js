import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function ReactMusicPlayer() {
	return (
		<div>
			<AudioPlayer
				style={{
					border: '5px groove',
					borderRadius: '30px'
				}}
				autoPlay={false}
				src='TodhSong.mp3'
				onPlay={(e) => console.log('onPlay')}
			/>
		</div>
	);
}

export default ReactMusicPlayer;
