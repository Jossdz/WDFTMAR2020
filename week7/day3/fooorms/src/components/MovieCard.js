import React from "react";

function MovieCard({ title, director, hasOscars, IMDbRating, i, deleteMovie }) {
  return (
    <article>
      <h2> {title} </h2>
      <b>{director}</b>
      <br />
      {hasOscars && "🏆"}
      <p>{IMDbRating}</p>
      <button onClick={() => deleteMovie(i)}>Borrar pinshi pelicula fea</button>
    </article>
  );
}

export default MovieCard;
