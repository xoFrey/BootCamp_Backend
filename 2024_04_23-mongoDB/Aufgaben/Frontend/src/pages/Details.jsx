import { useContext, useEffect, useState } from "react";
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

    console.log(details);


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


    return <>
        <section>
            {details ? <div>
                <h2 className="text-3xl">{details.title}</h2>
                <p>{details.director}</p>
                <p>{details.year}</p>
                <p>{details.genre}</p>
                <p>{details.plot}</p>

            </div> : <p>loading...</p>}
            <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
        </section>
        <section className={`${showEdit ? "" : "hidden"}`}>
            <form className="flex flex-col" >
                <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title} />
                <input type="text" placeholder="Year" onChange={(e) => setYear(e.target.value)} value={year} />
                <input type="text" placeholder="Director" onChange={(e) => setDirector(e.target.value)} value={director} />
                <input type="text" placeholder="Genre" onChange={(e) => setGenre(e.target.value)} value={genre} />
                <textarea name="" id="" cols="30" rows="10" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                <button onClick={() => editMovie()}>Submit</button>
            </form>
        </section>
    </>;
};

export default Details;