import { useContext, useState } from "react";
import { AllMovies } from "../context/Context";
import MovieCard from "../components/MovieCard";

const Home = () => {
    const { allMovies, setAllMovies } = useContext(AllMovies);
    const [limit, setLimit] = useState(50);

    return <><section className="bg-home bg-no-repeat bg-cover bg-center text-white h-screen w-100 ">
        <div className="flex flex-col items-center pt-40">
            <h2 className="text-3xl">MovieMagicDatabase has it all.</h2>
            <h2 className="">But you can still add to it.</h2>

        </div>
    </section>
        <article className="flex flex-wrap justify-center bg-black text-white gap-4">
            {allMovies.slice(0, limit).map((item, index) => (
                <div key={index} className="flex flex-col">
                    <MovieCard movies={item} />

                </div>
            ))}

        </article>
        <div className="bg-black text-white" >
            <button onClick={() => setLimit(limit + 50)}>See More</button></div>
    </>;
};

export default Home;