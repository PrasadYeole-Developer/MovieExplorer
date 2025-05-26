import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.posterUrl} className="poster" />
      <div className="bottom">
        <h2>Title: {movie.title}</h2>
        <p>Genre: {movie.genre.join(", ")}</p>
        <p>Rating: {movie.rating}</p>
        <p>Year: {movie.releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
