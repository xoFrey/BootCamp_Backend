import { useContext, useEffect } from "react";
import { backendURL } from "../api/api.js";
import { AllMovies, FavoritedMovies, IsInFavorites } from "../context/Context.jsx";

const FetchPage = () => {
    const { allMovies, setAllMovies } = useContext(AllMovies);
    const { allFavorites, setAllFavorites } = useContext(FavoritedMovies);
    const { isInFav, setIsInFav } = useContext(IsInFavorites);

    useEffect(() => {
        fetch(`${backendURL}/api/v1/movies`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => setAllMovies(data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch(`${backendURL}/api/v1/favorites`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => setAllFavorites(data))
            .catch((err) => console.log(err));
    }, []);


    console.log(allFavorites);


    return;
};

export default FetchPage;