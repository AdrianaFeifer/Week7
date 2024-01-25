import React, { useState, useEffect } from 'react';

const FilmsPage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    
    const fetchFilms = async () => {
      try {
        const response = await fetch('https://week-7-server.onrender.com/api/films');
        const data = await response.json();
        setFilms(data);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <div>
      <h2>Films</h2>
      <ul>
        {films.map((film) => (
          <li key={film.id}>{film.title} - {film.director} ({film.release_year})</li>
        ))}
      </ul>
    </div>
  );
};

export default FilmsPage;
