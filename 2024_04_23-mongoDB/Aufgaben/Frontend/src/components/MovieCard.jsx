import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FavoritedMovies, IsInFavorites } from "../context/Context";
import { backendURL } from "../api/api";

const MovieCard = ({ movies, favorite }) => {
    const [isFav, setIsFav] = useState(favorite || false);
    const { allFavorites, setAllFavorites } = useContext(FavoritedMovies);




    const addToFav = () => {
        const newMovieID = {
            movieID: movies._id
        };
        fetch(`http://localhost:1001/api/v1/movies/${movies._id}/favorites`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMovieID)
            })
            .then((res) => res.json())
            .then((data) => setIsFav(true))
            .catch((err) => console.log(err));
    };

    const deleteFav = () => {
        fetch(`http://localhost:1001/api/v1/favorites/${movies._id}`, { method: "DELETE" })
            .then((res) => res.json())
            .then(() => setIsFav(false))
            .then(() => setAllFavorites(allFavorites.filter((item) => movies._id !== item._id)))
            .catch((err) => console.log(err));
    };



    return <section className="w-40 h-60 p-4">
        <Link to={`/movies/${movies._id}`}>
            <div >
                <img src="/img/movieExample.jpg" alt="" />
                <h3>{movies.title}</h3>
                <p>{movies.director}</p>

            </div>
        </Link>
        {isFav ? <button onClick={() => { deleteFav(); }}>Remove from Fav!</button>
            : <button onClick={() => { addToFav(); }}>Put to Fav!</button>}

    </section>;
};

export default MovieCard;