import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieList from "./controllComponents/MovieList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieList />
      </header>
    </div>
  );
}

export default App;
