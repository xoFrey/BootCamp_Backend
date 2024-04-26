import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FavoritedMovies, IsInFavorites } from "../context/Context";
import { backendURL } from "../api/api";
import FullStar from "./svg/FullStar";
import EmptyStar from "./svg/EmptyStar";

const MovieCard = ({ movies, favorite }) => {
    const [isFav, setIsFav] = useState(favorite);
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


    return <section className="">
        <Link to={`/movies/${movies._id}`}>
            <div >
                <img className="pb-4" src="/img/movieExample.jpg" alt="" />
            </div>
        </Link>
        <div className="flex items-start gap-5">
            <div>
                <h3 className="text-xl text-white font-light mb-1">{movies.title}</h3>
                <p className="text-mainText text-xl font-light">{movies.director}</p>
            </div>
            {isFav ? <FullStar deleteFav={deleteFav} />
                : <EmptyStar addToFav={addToFav} />}
        </div>
    </section>;
};

export default MovieCard;