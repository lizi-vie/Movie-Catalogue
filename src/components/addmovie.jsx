import React, { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [image, setImage] = useState('');
  const [priority, setPriority] = useState('medium'); // New state for priority

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({ movie_title: title, description, Movie_language: language, image, priority });
    setTitle('');
    setDescription('');
    setLanguage('');
    setImage('');
    setPriority('medium'); // Reset priority after submission
  };

  return (
    <div>
      <h1>Add a Movie</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Language:
          <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br />
        <label>
          Priority:
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
