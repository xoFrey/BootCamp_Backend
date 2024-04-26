import { useContext, useState, useEffect } from "react";
import { FavoritedMovies } from "../context/Context";
import MovieCard from "../components/MovieCard";
import { backendURL } from "../api/api";
import { useParams } from "react-router-dom";

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
        <section className="bg-home bg-no-repeat bg-cover bg-center text-white h-screen w-100 flex justify-center  pt-40">
            <div className="text-5xl text-headline font-black">
                <h2 className="text-5xl">Your Favorites</h2>
            </div>
        </section>
        <h2 className="text-5xl font-extrabold text-mainText pt-40 pb-20 bg-subcolor px-12">Favorite Movies</h2>
        <article className="flex flex-wrap justify-center bg-subcolor gap-24 px-10 ">
            {allFavorites.slice(0, limit).map((item) => (
                <div key={item._id} className="w-1/4">
                    <MovieCard movies={item} favorite={true} />

                </div>
            ))}

        </article>
        <div className="bg-subcolor pt-20 pb-10 text-center" >
            <button className=" bg-mainText text-white rounded-full border-2 border-mainText px-8 py-2" onClick={() => setLimit(limit + 50)}>See More</button>
        </div>
    </>;
};

export default Favorites;