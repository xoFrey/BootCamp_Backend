import { useContext, useEffect, useState } from "react";
import { AllMovies, FavoritedMovies, IsInFavorites } from "../context/Context";
import MovieCardHome from "../components/MovieCardHome";
import MovieCard from "../components/MovieCard";
import FetchPage from "./FetchPage";

const Home = () => {
    const { allMovies, setAllMovies } = useContext(AllMovies);
    const { allFavorites } = useContext(FavoritedMovies);
    const { isInFav, setIsInFav } = useContext(IsInFavorites);
    const [limit, setLimit] = useState(50);
    const [favIds, setFavIds] = useState([]);


    useEffect(() => {
        setIsInFav(allFavorites.map((movie) => movie._id)); // [id, id, id]
    }, []);

    return <>

        <section className="bg-home bg-no-repeat bg-cover bg-center text-white h-screen w-100 flex justify-center pt-40 ">
            <div className="text-5xl text-headline font-black">
                <h2 className="">MovieMagicDatabase has it all. </h2>
                <h2 className="">But you can still <span className="italic">add</span> to it.</h2>
            </div>
        </section>

        <h2 className="text-5xl font-extrabold text-mainText pt-40 pb-20 bg-subcolor px-12">All Movies</h2>
        <article className="flex flex-wrap justify-center bg-subcolor gap-24 px-10 ">
            {allMovies.slice(0, limit).map((item) => (

                <div key={item._id} className="w-1/4">
                    {/* favorite={isInFav.includes(item._id)} */}
                    <MovieCard movies={item} favorite={isInFav.includes(item._id)} />
                </div>
            ))}

        </article>

        <div className="bg-subcolor pt-20 pb-10 text-center" >
            <button className=" bg-mainText text-white rounded-full border-2 border-mainText px-8 py-2" onClick={() => setLimit(limit + 50)}>See More</button>
        </div>
    </>;
};

export default Home;