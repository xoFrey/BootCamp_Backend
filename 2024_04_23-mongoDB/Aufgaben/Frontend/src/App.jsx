import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddMovies from "./pages/AddMovies";
import Favorites from "./pages/Favorites";
import { useState } from "react";
import { AllMovies, FavoritedMovies, IsInFavorites } from "./context/Context";
import FetchPage from "./pages/FetchPage";
import Navbar from "./components/Navbar";
import Details from "./pages/Details";

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [allFavorites, setAllFavorites] = useState([]);
  const [isInFav, setIsInFav] = useState();


  return <>
    <IsInFavorites.Provider value={{ isInFav, setIsInFav }}>
      <FavoritedMovies.Provider value={{ allFavorites, setAllFavorites }}>
        <AllMovies.Provider value={{ allMovies, setAllMovies }}>
          <FetchPage />
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home setIsInFav={setIsInFav} />} />
              <Route path="/movies/add" element={<AddMovies />} />
              <Route path="/movies/favorites" element={<Favorites />} />
              <Route path="/movies/:id" element={<Details />} />
            </Routes>
          </BrowserRouter>
        </AllMovies.Provider>
      </FavoritedMovies.Provider>
    </IsInFavorites.Provider>
  </>;
}

export default App;
