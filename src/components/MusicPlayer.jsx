import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import './components.css';

function MusicPlayer({ songUrls, isPlaying, onPlayPause, onNext }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [volume, setVolume] = useState(0.8); // Initial volume set to 80%
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

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  return (
    <div className="music-player">
      <ReactPlayer
        ref={playerRef}
        url={songUrls[currentSongIndex]}
        playing={isPlaying}
        volume={volume}
        onEnded={handleNextSong}
        controls={false}
        width="0"
        height="0"
      />
      <h1> Music Controls</h1>
      <div className="controls flex justify-center items-center space-x-4">
        <button onClick={handlePreviousSong} className="text-2xl">
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button onClick={handlePlayPause} className="text-2xl">
          {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
        </button>
        <button onClick={handleNextSong} className="text-2xl">
          <FontAwesomeIcon icon={faForward} />
        </button>
        <div className="volume-control flex items-center ml-4">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-32"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
