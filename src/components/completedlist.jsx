import React from 'react';
import Navbar from './navbar';

const CompletedList = ({ movies, onScoreUpdate, onTimesWatchedUpdate }) => {
  const handleScoreUpdate = (id) => {
    const score = prompt("Enter new score:");
    if (score !== null) {
      onScoreUpdate(id, parseFloat(score));
    }
  };

  const handleTimesWatchedUpdate = (id) => {
    const timesWatched = prompt("Enter number of times watched:");
    if (timesWatched !== null) {
      onTimesWatchedUpdate(id, parseInt(timesWatched));
    }
  };

  const sortedMovies = movies.slice().sort((a, b) => b.score - a.score);

  return (
    <div className="movie-catalogue">
      <Navbar />
      <h1>Completed Movies</h1>
      <div className="movie-grid">
        {sortedMovies.map(movie => (
          <div key={movie.movieid} className="movie-item">
            <img src={movie.image} alt={`Poster of ${movie.movie_title}`} className="movie-poster" />
            <h2 className="movie-title">{movie.movie_title}</h2>
            <p className="movie-description">{movie.description}</p>
            <p>Score: {movie.score || 'Not Rated'}</p>
            <p>Times Watched: {movie.timesWatched || 0}</p>
            <button onClick={() => handleScoreUpdate(movie.movieid)}>Update Score</button>
            <button onClick={() => handleTimesWatchedUpdate(movie.movieid)}>Update Times Watched</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedList;
