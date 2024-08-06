import React, { useState } from 'react';

const MovieItem = ({ movie, onPriorityUpdate, onMarkAsWatched, onRemove, onQuickAdd, onScoreUpdate, onTimesWatchedUpdate }) => {
  const [rating, setRating] = useState(movie.score || 0);

  const handleRatingChange = (e) => {
    const newRating = parseInt(e.target.value, 10);
    setRating(newRating);
    onScoreUpdate(movie.movieid, newRating);
  };

  const handlePriorityChange = (newPriority) => {
    onPriorityUpdate(movie.movieid, newPriority);
  };

  const handleTimesWatchedChange = () => {
    const timesWatched = prompt("Enter number of times watched:");
    if (timesWatched !== null) {
      onTimesWatchedUpdate(movie.movieid, parseInt(timesWatched, 10));
    }
  };

  return (
    <div className="movie-item">
      <img src={movie.image} alt={`Poster of ${movie.movie_title}`} className="movie-poster" />
      <h2 className="movie-title">{movie.movie_title}</h2>
      <p className="movie-description">{movie.description}</p>
      <p>Language: {movie.Movie_language}</p>
      <p>Priority: {movie.priority}</p>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <React.Fragment key={star}>
            <input
              type="radio"
              id={`star-${star}-${movie.movieid}`}
              name={`rating-${movie.movieid}`}
              value={star}
              checked={rating === star}
              onChange={handleRatingChange}
            />
            <label htmlFor={`star-${star}-${movie.movieid}`}>&#9733;</label>
          </React.Fragment>
        ))}
      </div>
      <button className="quick-add-button" onClick={() => onQuickAdd(movie)}>Quick Add</button>
      <button className="remove-movie-btn" onClick={() => onRemove(movie.movieid)}>Remove</button>
      <button className="priority-high" onClick={() => handlePriorityChange('high')}>Set High Priority</button>
      <button className="priority-medium" onClick={() => handlePriorityChange('medium')}>Set Medium Priority</button>
      <button className="priority-low" onClick={() => handlePriorityChange('low')}>Set Low Priority</button>
      <button className="update-times-watched-btn" onClick={handleTimesWatchedChange}>Update Times Watched</button>
    </div>
  );
};

export default MovieItem;
