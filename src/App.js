import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [movies, setMovies] = useState([]);

  function addMovie() {
    if (title === "" || rating === "") return;
    const newMovie = { title, rating, review };
    setMovies([...movies, newMovie]);
    setTitle("");
    setRating("");
    setReview("");
  }

  function removeMovie(index) {
    const updatedList = [...movies];
    updatedList.splice(index, 1);
    setMovies(updatedList);
  }

  function getStars(num) {
    return "⭐".repeat(num);
  }

  return (
    <div className="App">
      <h1>🎬 My Movie Watch List</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          type="text"
          placeholder="Write a short review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>

      <ul>
        {movies.map((movie, index) => (
          <li key={index} className="movie-item">
            <strong>{movie.title}</strong> <br />
            {getStars(movie.rating)} <br />
            <em>{movie.review}</em> <br />
            <button onClick={() => removeMovie(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
