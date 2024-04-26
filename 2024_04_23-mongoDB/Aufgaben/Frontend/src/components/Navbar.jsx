import { Link } from "react-router-dom";

const Navbar = () => {
    return <nav className="flex justify-between bg-subcolor text-mainText items-center py-4 px-10">
        <div className="flex items-center gap-6">
            <Link to="/">
                <h2 className="font-bold text-3xl font">MMDb</h2>
            </Link>
            <Link to="/movies/favorites">
                <img className="w-10" src="/img/Vector.svg" alt="" />
            </Link>
        </div>
        <div className="flex items-center gap-5">
            <input className="rounded-full bg-subcolor border-2 border-mainText px-3 py-2 placeholder-mainText/50 w-80" type="text" name="" id="" placeholder="e.g. The Godfather" />
            <button className="bg-mainText text-white rounded-full border-2 border-mainText px-8 py-2">Submit</button>
        </div>
        <Link to="/movies/add"><button className="font-bold">Add your own</button></Link>

    </nav>;
};

export default Navbar;