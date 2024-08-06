import React, { useEffect } from 'react';
import Navbar from './navbar';
import MovieItem from './MovieItem';

const CompletedList = ({ movies, onScoreUpdate, onTimesWatchedUpdate }) => {
  useEffect(() => {
    if (movies.length === 0) {
      movies.push({
        movieid: 1,
        movie_title: "Default Movie",
        image: "https://wallpapercave.com/wp/wp6408959.jpg",
        description: "This is a default movie added to ensure the list is not empty.",
        Movie_language: "English",
        score: 0,
        timesWatched: 0,
        priority: "medium"
      });
    }
  }, [movies]);

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

  const sortedMovies = movies.sort((a, b) => b.score - a.score);

  return (
    <div className="movie-catalogue">
      <Navbar />
      <h1>Completed Movies</h1>
      <div className="movie-grid">
        {sortedMovies.map(movie => (
          <MovieItem
            key={movie.movieid}
            movie={movie}
            onScoreUpdate={handleScoreUpdate}
            onTimesWatchedUpdate={handleTimesWatchedUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default CompletedList;
