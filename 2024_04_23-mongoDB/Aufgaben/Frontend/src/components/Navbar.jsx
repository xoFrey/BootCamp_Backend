import { Link } from "react-router-dom";

const Navbar = () => {
    return <nav className="flex justify-between bg-slate-500 text-white items-center p-2">
        <div className="flex items-center gap-3">
            <Link to="/">
                <h2>MMDb</h2>
            </Link>
            <Link to="/movies/favorites">
                <img className="w-8" src="/img/Vector.svg" alt="" />
            </Link>
        </div>
        <div className="">
            <input type="text" name="" id="" />
            <button>Submit</button>
        </div>
        <Link to="/movies/add"><button>Add your own</button></Link>

    </nav>;
};

export default Navbar;