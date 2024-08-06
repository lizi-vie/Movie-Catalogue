import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/index";
import Watchlist from  "./components/watchlist"
import Navbar from "./components/navbar";
import CompletedList from "./components/completedlist";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./components/watchlist.jsx" element={<Watchlist />} />
        <Route path="./components/completedlist.jsx" element={<CompletedList />} />
      </Routes>
    </Router>
  );
}

export default App;
