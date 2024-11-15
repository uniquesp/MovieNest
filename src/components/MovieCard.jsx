import React from "react";

const MovieCard = ({
  movieObj,
  poster_path,
  name,
  handelAddtoWatchList,
  handelRemoveFromWatchList,
  watchList,
}) => {
  function doesContain(movieObj) {
    return watchList.some((movie) => movie.id === movieObj.id);
  }  

  return (
    <div
      className="h-[50vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-end relative"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={handelRemoveFromWatchList}
          className="absolute top-2 right-2 text-2xl rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={handelAddtoWatchList}
          className="absolute top-2 right-2 text-2xl rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl text-center w-full bg-gray-900/60 p-4">
        {name}
      </div>
    </div>
  );
};

export default MovieCard;
