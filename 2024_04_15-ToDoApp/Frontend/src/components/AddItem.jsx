import { useContext, useState } from "react";
import { FullToDoList } from "./Context";

const AddItem = () => {
    const { todoList, setTodoList } = useContext(FullToDoList);
    const [description, setDescription] = useState("");


    const addTodoItem = (event) => {
        event.preventDefault();

        const newTodo = {
            description,
        };
        fetch("http://localhost:2003/api/v1/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTodo),
        })
            .then((res) => res.json())
            .then((data) => {
                setTodoList(data);
                setDescription("");
            })
            .catch((err) => console.log(err));
    };
    return <>
        <form >
            <input
                type="text"
                placeholder="Insert Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={addTodoItem}>Add</button>
        </form>
    </>;
};

export default AddItem;