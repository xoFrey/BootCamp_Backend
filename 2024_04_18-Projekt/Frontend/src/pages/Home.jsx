import { useEffect, useState } from "react";

const Home = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [entry, setEntry] = useState("");
    const [allEntries, setAllEntries] = useState([]);
    const [file, setFile] = useState();

    useEffect(() => {
        fetch(`http://localhost:1000/api/v1/guestbook`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                if (typeof data === "object") {
                    return console.log("Error");
                } else {
                    setAllEntries(data);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const addNewEntry = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("file", file, file.name);


        fetch(`http://localhost:1000/api/v1/files/upload`, { method: "POST", body: formData })
            .then((res) => res.json())
            .then((data) => {
                const newEntry = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    entry: entry,
                    fileName: data.fileName
                };
                return newEntry;
            })
            .then((newEntry) =>
                fetch(`http://localhost:1000/api/v1/guestbook`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(newEntry)
                    })
            )
            .then((res) => res.json())
            .then((data) => { setAllEntries(data); setFirstName(""); setLastName(""), setEmail(""), setFile([]), setEntry(""); })
            .catch((err) => console.log(err));
    };


    return <section className="flex flex-col items-center justify-center"  >
        <h1>Guestbook</h1>
        <form className=" flex flex-col w-1/4 ">
            <input className="border" type="text" placeholder="Vorname" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            <input className="border" type="text" placeholder="Nachname" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            <input className="border" type="email" placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <textarea className="border" name="message" id="entry" cols="30" rows="10" placeholder="Nachricht" onChange={(e) => setEntry(e.target.value)} value={entry}></textarea>
            <button className="border" onClick={addNewEntry}>Send</button>
        </form>

        <section className="w-1/4">
            {allEntries.map((item, index) => (
                <div key={index}>
                    <div className="flex gap-1">
                        <p>{item.firstName}</p>
                        <p>{item.lastName}</p>
                        <a href="/" className="underline text-blue-500">{item.email} </a>
                        <p>schreibt:</p>
                    </div>
                    <p>{item.entry}</p>
                    <img src={"http://localhost:1000/" + item.fileName} alt="" />
                </div>
            ))}
        </section>
    </section>;
};

export default Home;