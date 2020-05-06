import React, { Component } from "react";
import AddMovie from "./AddMovie";
import MovieCard from "../components/MovieCard";

export default class MovieList extends Component {
  state = {
    movies: [],
  };
  addMovie = (movie) => {
    const withNewMovie = [...this.state.movies, movie];
    this.setState({
      movies: withNewMovie,
    });
  };

  deleteMovie = (i) => {
    const moviesCopy = this.state.movies.filter(
      (movie, movieIndex) => i !== movieIndex
    );
    this.setState({
      movies: moviesCopy,
    });
  };
  render() {
    return (
      <div>
        <AddMovie addMovie={this.addMovie} />
        <section>
          {this.state.movies.map((movie, i) => (
            <MovieCard
              {...movie}
              key={i}
              i={i}
              deleteMovie={this.deleteMovie}
            />
          ))}
        </section>
      </div>
    );
  }
}
