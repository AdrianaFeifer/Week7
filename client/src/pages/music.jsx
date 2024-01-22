
import React, { useState, useEffect } from 'react';

const MusicPage = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
   
    const fetchMusic = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/music');
        const data = await response.json();
        setMusic(data);
      } catch (error) {
        console.error('Error fetching music:', error);
      }
    };

    fetchMusic();
  }, []);

  return (
    <div>
      <h2>Music</h2>
      <ul>
        {music.map((track) => (
          <li key={track.id}>{track.title} - {track.artist} ({track.release_year})</li>
        ))}
      </ul>
    </div>
  );
};

export default MusicPage;
