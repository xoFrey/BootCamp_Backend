import { useContext, useState, useEffect } from "react";
import { FavoritedMovies } from "../context/Context";
import MovieCard from "../components/MovieCard";
import { backendURL } from "../api/api";

const Favorites = () => {
    const { allFavorites, setAllFavorites } = useContext(FavoritedMovies);
    const [limit, setLimit] = useState(50);

    useEffect(() => {
        fetch(`${backendURL}/api/v1/favorites`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => setAllFavorites(data))
            .catch((err) => console.log(err));
    }, []);


    return <>
        <section className="bg-home bg-no-repeat bg-cover bg-center text-white h-screen w-100 ">
            <div className="flex flex-col items-center pt-40">
                <h2 className="text-3xl">Your Favorites</h2>
            </div>
        </section>
        <article className="flex flex-wrap justify-center bg-black text-white gap-4">
            {allFavorites.slice(0, limit).map((item) => (
                <div key={item._id} className="flex flex-col">
                    <MovieCard movies={item} favorite={true} />

                </div>
            ))}

        </article>
        <div className="bg-black text-white" >
            <button onClick={() => setLimit(limit + 50)}>See More</button></div>

    </>;
};

export default Favorites;