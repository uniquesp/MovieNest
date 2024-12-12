import React, { useEffect, useState } from "react";
import genresId from "../utility/genere.js";

const WatchList = ({ watchList, handelRemoveFromWatchList, setWatchList }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  

  let handelSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedInc = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedInc]);
  };

  let sortDecreasing = () => {
    let sortedDec = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDec]);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genresId[movieObj.genre_ids[0]];
    });
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre, index) => {
          return (
            <div
              key={index} // Add a unique key
              className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold mx-4"
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className=" flex justify-center my-4">
        <input
          type="text"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
          onChange={handelSearch}
          value={search}
          placeholder="Search Movies"
        />
      </div>

      <div className=" overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>
                <div className="flex items-center justify-center gap-2">
                  <i
                    onClick={sortIncreasing}
                    className="p-2 fa-solid fa-arrow-up cursor-pointer"
                  ></i>
                  <span>Ratings</span>
                  <i
                    onClick={sortDecreasing}
                    className="p-2 fa-solid fa-arrow-down cursor-pointer"
                  ></i>
                </div>
              </th>
              <th>
                <div className="flex items-center justify-center gap-2">
                  <i
                    onClick={sortIncreasing}
                    className="p-2 fa-solid fa-arrow-up cursor-pointer"
                  ></i>
                  <span>Popularity</span>
                  <i
                    onClick={sortDecreasing}
                    className="p-2 fa-solid fa-arrow-down cursor-pointer"
                  ></i>
                </div>
              </th>
              <th>Genere</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchList.length === 0 ? (
              <tr>
                <td colSpan="4" className="p-4">
                  No movies in watchlist.
                </td>
              </tr>
            ) : (
              watchList
                .filter((movieObj) => {
                  return movieObj.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((movieObj) => (
                  <tr key={movieObj.id} className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[7rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        alt={movieObj.title || "Movie"}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average || "N/A"}</td>
                    <td>{movieObj.popularity || "N/A"}</td>
                    <td>{genresId[movieObj.genre_ids[0]]}</td>
                    <td
                      className="text-red-800 cursor-pointer"
                      onClick={() => handelRemoveFromWatchList(movieObj)}
                    >
                      Delete
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
