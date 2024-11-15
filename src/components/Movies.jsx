import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const Movies = ({handelAddtoWatchList, handelRemoveFromWatchList, watchList}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo,setPageNo] = useState(1);

  const handelPrev= () => {
    if(pageNo===1){
      setPageNo(pageNo)
    }else{
      setPageNo(pageNo-1)
    }
  }

  const handelNext = () =>{
    setPageNo(pageNo + 1)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=39fba5af64ba3c9c0ce210bee2b374e5&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
      // console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl font-bold m-5 text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id} 
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              watchList={watchList}
              handelAddtoWatchList={() => handelAddtoWatchList(movieObj)}
              handelRemoveFromWatchList = {() => handelRemoveFromWatchList(movieObj)}
            />
          );
        })}
      </div>
      <Pagination pageNo={pageNo} handelNext={handelNext} handelPrev={handelPrev} />
    </div>
  );
};

export default Movies;
//https://api.themoviedb.org/3/movie/popular?api_key=39fba5af64ba3c9c0ce210bee2b374e5&language=en-US&page=1
