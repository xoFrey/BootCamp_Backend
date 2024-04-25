import { useState } from "react";
import { AllMovies } from "../context/Context";

const AddMovies = () => {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [director, setDirector] = useState("");
    const [genre, setGenre] = useState("");
    const [rate, setRate] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");

    const addNewMovie = (e) => {
        e.preventDefault();
        const newMovie = {
            title: title,
            year: year,
            director: director,
            genre: genre,
            rate: rate,
            url: url,
            description: description
        };

        fetch(`http://localhost:1001/api/v1/movies`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMovie)
            }).then((data) => res.json(data))
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    };


    return <>
        <form className="flex flex-col" >
            <input type="text" placeholder="Movie Title" onChange={(e) => setTitle(e.target.value)} value={title} />
            <input type="text" placeholder="Year" onChange={(e) => setYear(e.target.value)} value={year} />
            <input type="text" placeholder="Director" onChange={(e) => setDirector(e.target.value)} value={director} />
            <input type="text" placeholder="Genre" onChange={(e) => setGenre(e.target.value)} value={genre} />
            <input type="text" placeholder="Rate" onChange={(e) => setRate(e.target.value)} value={rate} />
            <input type="text" placeholder="URL for Movie Poster" onChange={(e) => setUrl(e.target.value)} value={url} />
            <textarea name="" id="" cols="30" rows="10" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
            <button onClick={() => addNewMovie()}>Submit</button>
        </form>
    </>;
};

export default AddMovies;