import React from 'react';

const RecentlyRemovedMovies = ({ movies }) => {
  return (
    <div>
      <h2>Recently Removed Movies</h2>
      {movies.length > 0 ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.movieid}>{movie.movie_title}</li>
          ))}
        </ul>
      ) : (
        <p>No recently removed movies.</p>
      )}
    </div>
  );
};

export default RecentlyRemovedMovies;
