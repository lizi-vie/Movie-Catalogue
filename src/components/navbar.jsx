import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="./index.jsx">Home</Link></li>
      <li><Link to="./watchlist.jsx">Watchlist</Link></li>
      <li><Link to="./completedlist.jsx">Completed Watchlist</Link></li>
      <li><Link to="./RecentlyRemovedMovies.jsx">Recently Removed Movies</Link></li>
    </ul>
  </nav>
);

export default Navbar;
