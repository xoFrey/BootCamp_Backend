import { useContext, useState } from "react";
import { FullToDoList } from "./Context";


const TodoItem = ({ task, todo }) => {
    const [description, setDescription] = useState(todo.description);
    const { todoList, setTodoList } = useContext(FullToDoList);
    const [showInput, setShowInput] = useState(false);

    const updateItem = () => {

        const updateInfo = {
            description
        };
        fetch(`http://localhost:2003/api/v1/todos/${todo.id}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updateInfo)
            })
            .then((res) => res.json())
            .then((data) => setTodoList(data))
            .catch((err) => console.log(err));

    };

    return <section className="flex items-center gap-5">
        <p >{task}</p>
        <button onClick={() => { updateItem(); setShowInput(!showInput); }}>Update</button>
    </section>;
};

export default TodoItem;