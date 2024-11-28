import React, { useState } from "react";

const WatchList = ({ watchList, handelRemoveFromWatchList }) => {
  const [search, setSearch] = useState("");

  let handelSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4">
          All Genres
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold mx-4">
          Action
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold mx-4">
          Crime
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold mx-4">
          Comedy
        </div>
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
              <th>Ratings</th>
              <th>Popularity</th>
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
