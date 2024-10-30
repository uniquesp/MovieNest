import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=39fba5af64ba3c9c0ce210bee2b374e5&language=en-US&page=1`
      )
      .then(function (res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, []);

  return (
    <div className="p-5">
      <div className="text-2xl font-bold m-5 text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
            />
          );
        })}
      </div>
      <Pagination/>
    </div>
  );
};

export default Movies;
//https://api.themoviedb.org/3/movie/popular?api_key=39fba5af64ba3c9c0ce210bee2b374e5&language=en-US&page=1
