import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import "./index.css";
import DarkMode from "./components/DarkMode";

const featuredApi =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8764ddcdad95fa092ad4dda44d11b69b&page=1";

const searchApi =
  "https://api.themoviedb.org/3/search/movie?api_key=8764ddcdad95fa092ad4dda44d11b69b&query=";

// 04c35731a5ee918f014970082a0088b1

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(featuredApi);
  }, []);

  const getMovies = (Api) => {
    fetch(Api)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(searchApi + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <header>

          <h1>MovieBox</h1>
  
        <DarkMode />
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="input"
            placeholder="🔎  Search movies"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
