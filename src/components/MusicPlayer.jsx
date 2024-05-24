import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import './components.css';

function MusicPlayer({ songUrls, isPlaying, onPlayPause, onNext }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const playerRef = useRef(null);

  const handlePlayPause = () => {
    onPlayPause(!isPlaying);
  };

  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songUrls.length;
    setCurrentSongIndex(nextIndex);
    onNext(nextIndex);
  };

  const handlePreviousSong = () => {
    const prevIndex = (currentSongIndex - 1 + songUrls.length) % songUrls.length;
    setCurrentSongIndex(prevIndex);
    onNext(prevIndex);
  };

  return (
    <div className="music-player">
      <div className="playerview">
      <ReactPlayer
        ref={playerRef}
        url={songUrls[currentSongIndex]}
        playing={isPlaying}
        onEnded={handleNextSong}
        controls={true}
        width="100%"
        height="50px"
      />
      </div>
      <div className="controls space-x-2">
        <p>Music Controls</p>
        <button onClick={handlePreviousSong} className="bg-blue-500 text-white px-4 py-2 rounded">Previous</button>
        <button onClick={handlePlayPause} className="bg-green-500 text-white px-4 py-2 rounded">{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={handleNextSong} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
}

export default MusicPlayer;
