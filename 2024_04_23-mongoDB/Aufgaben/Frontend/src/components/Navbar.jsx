import { Link } from "react-router-dom";

const Navbar = () => {
    return <nav className="flex justify-between bg-subcolor text-mainText items-center py-14 px-20">
        <div className="flex items-center gap-16">
            <Link to="/">
                <h2 className="font-bold text-5xl font">MMDb</h2>
            </Link>
            <Link to="/movies/favorites">
                <img className="w-16 h-14" src="/img/Vector.svg" alt="" />
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