
import React, { useState, useEffect } from 'react';

const GenrePage = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    
    const fetchGenres = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/genres');
        const data = await response.json();
        setGenres(data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div>
      <h2>Genres</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenrePage;
