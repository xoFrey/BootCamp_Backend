import { useContext, useEffect, useRef, useState } from "react";
import { AllMovies } from "../context/Context";
import { useParams } from "react-router-dom";


const Details = () => {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [description, setDescription] = useState("");

    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");

    const [details, setDetails] = useState();
    const [showEdit, setShowEdit] = useState(false);
    const { allMovies, setAllMovies } = useContext(AllMovies);




    const { id } = useParams();
    useEffect(() => {
        const find = allMovies.find((item) => item._id == id);
        setDetails(find);
    }, [allMovies]);

    const editMovie = () => {
        const updatedMovie = {
            title: title,
            year: year,
            director: director,
            genre: genre,
            url: url,
            description: description
        };

        fetch(`http://localhost:1001/api/v1/movies/${id}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedMovie)
            })
            .then((res) => res.json())
            .then((data) => { setAllMovies(data); console.log(data); })
            .catch((err) => console.log(err));
    };
    console.log(details);

    const paragraphRef = useRef(null);

    return <>
        <section className="bg-subcolor px-20 pt-10 ">
            {details ? <div>
                <h2 className="text-5xl text-headline font-extrabold pb-5">{details.title}</h2>
                <div className="flex text-white text-xl pb-16">
                    <p>{details.year} | </p>
                    <p className="pl-1"> {details.director}</p>
                </div>
                <div className="flex gap-10 pb-4">
                    <button className="flex items-center gap-2 text-yellow font-bold border-2 rounded-full pr-6 ">
                        <img className="pr-3" src="/img/plus.svg" alt="" />Add to Favorites</button>
                    <button className="border-2 text-mainText rounded-full px-6 font-bold " onClick={() => { setShowEdit(!showEdit); window.scrollTo(0, document.body.scrollHeight); }}>Edit Movie</button>
                </div>
                <div className="flex gap-20">
                    <div className="w-4/5">
                        <img src="/img/movieExample.jpg" alt="" />
                        <div className="flex gap-5 text-white text-l pt-5">
                            <p>Imdb Rating: {details.imdb.rating}</p>
                            <p className="pb-10">{details.runtime} min</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex pb-10 ">
                            {details.genres.map((genre) => (
                                <p className="bg-mainText text-white rounded-full border-2 border-mainText px-5 py-1"> {genre}</p>
                            ))}
                        </div>
                        <h2 className="text-5xl text-headline font-extrabold pb-5">Story</h2>
                        <p className="text-white text-xl pb-16">{details.plot}</p>
                    </div>
                </div>

            </div > : <p className="bg-subcolor">loading...</p>}
        </section >
        <section ref={paragraphRef} className={`${showEdit ? "" : "hidden"} bg-subcolor pt-3`}>
            <form className="flex flex-col gap-2 bg-subcolor items-center justify-center pb-5" >
                <h2 className="text-5xl text-headline font-extrabold pb-5">Edit the Movie</h2>
                <input className="bg-subcolor border-2 placeholder-mainText/50 border-mainText rounded-full px-3 py-1 w-2/6" type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
                <input className="bg-subcolor border-2 placeholder-mainText/50 border-mainText rounded-full px-3 py-1 w-2/6" type="text" placeholder="Year" onChange={(e) => setYear(e.target.value)} value={year} />
                <input className="bg-subcolor border-2 placeholder-mainText/50 border-mainText rounded-full px-3 py-1 w-2/6" type="text" placeholder="Director" onChange={(e) => setDirector(e.target.value)} value={director} />
                <input className="bg-subcolor border-2 placeholder-mainText/50 border-mainText rounded-full px-3 py-1 w-2/6" type="text" placeholder="Genre" onChange={(e) => setGenre(e.target.value)} value={genre} />
                <textarea className="bg-subcolor border-2 placeholder-mainText/50 border-mainText rounded-2xl px-3 py-1 w-2/6" name="" id="" cols="30" rows="10" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                <button className="bg-mainText text-white rounded-full border-2 border-mainText px-5 py-1" onClick={() => editMovie()}>Submit</button>
            </form>
        </section>
    </>;
};

export default Details;