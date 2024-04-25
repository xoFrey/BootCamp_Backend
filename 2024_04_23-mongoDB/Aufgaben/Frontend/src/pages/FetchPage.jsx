import { useContext, useEffect } from "react";
import { backendURL } from "../api/api.js";
import { AllMovies, FavoritedMovies, IsInFavorites } from "../context/Context.jsx";

const FetchPage = () => {
    const { allMovies, setAllMovies } = useContext(AllMovies);
    const { allFavorites, setAllFavorites } = useContext(FavoritedMovies);

    useEffect(() => {
        fetch(`${backendURL}/api/v1/movies`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => setAllMovies(data))
            .catch((err) => console.log(err));
    }, []);




    return;
};

export default FetchPage;