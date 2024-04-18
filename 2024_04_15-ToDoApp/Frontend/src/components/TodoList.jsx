import { useContext, useEffect } from "react";
import { FullToDoList } from "./Context.jsx";
import DeleteItem from "./DeleteItem.jsx";



const TodoList = () => {
    const { todoList, setTodoList } = useContext(FullToDoList);
    console.log(todoList);



    return <section className="w-1/2">
        {todoList.map((todo, index) => (
            <div key={index} className="flex gap-4">
                <p > {todo.description}</p>
                <DeleteItem todo={todo} />
            </div>
        ))}

    </section>;
};

export default TodoList;