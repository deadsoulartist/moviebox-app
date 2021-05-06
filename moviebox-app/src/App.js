import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import "./index.css";

const featuredApi =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8764ddcdad95fa092ad4dda44d11b69b&page=1";

const searchApi =
  "https://api.themoviedb.org/3/search/movie?api_key=8764ddcdad95fa092ad4dda44d11b69b&language=en-US&page=1&include_adult=false";

// 04c35731a5ee918f014970082a0088b1

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(featuredApi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="movie-container">
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  );
}

export default App;
