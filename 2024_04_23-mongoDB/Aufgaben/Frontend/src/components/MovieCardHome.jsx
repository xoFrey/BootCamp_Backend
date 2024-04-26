import { Link } from "react-router-dom";


const MovieCardHome = ({ movies }) => {


    return <section className="">
        <Link to={`/movies/${movies._id}`}>
            <div >
                <img className="pb-4" src="/img/movieExample.jpg" alt="" />
                <h3 className="text-xl text-white font-light mb-1">{movies.title}</h3>
                <p className="text-mainText text-xl font-light">{movies.director}</p>

            </div>
        </Link>


    </section>;
};

export default MovieCardHome;