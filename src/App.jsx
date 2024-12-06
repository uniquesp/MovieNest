import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  const [watchList, setWatchList] = useState([]);

  const handelAddtoWatchList = (movieObj) => {
    if (!watchList.some((movie) => movie.id === movieObj.id)) {
      const newWatchList = [...watchList, movieObj];
      localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
      setWatchList(newWatchList);
      console.log(newWatchList);
    }
  };

  const handelRemoveFromWatchList = (movieObj) => {
    const filteredWatchList = watchList.filter(
      (movie) => movie.id !== movieObj.id
    );
    setWatchList(filteredWatchList);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
    console.log(filteredWatchList);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);
  return (
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
        />
        <Route
          path="/watchlist"
          element={
            <WatchList
              watchList={watchList}
              handelRemoveFromWatchList={handelRemoveFromWatchList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
