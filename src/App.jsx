import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  let [watchList, setWatchList] = useState([]);

  let handelAddtoWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  let handelRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchList(filteredWatchList);
    console.log(filteredWatchList);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchList={watchList}
                  handelAddtoWatchList={handelAddtoWatchList}
                  handelRemoveFromWatchList={handelRemoveFromWatchList}
                />
              </>
            }
          ></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
