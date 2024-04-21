import { useContext, useEffect, useState } from "react";
import { FullToDoList } from "./Context.jsx";
import DeleteItem from "./DeleteItem.jsx";
import TodoItem from "./TodoItem.jsx";




const TodoList = () => {
    const { todoList, setTodoList } = useContext(FullToDoList);


    return <section>
        {todoList.map((todo, index) => (
            <div key={index} className="flex gap-4">
                <TodoItem task={todo.description} todo={todo} />
                <DeleteItem todo={todo} />
            </div>
        ))}

    </section>;
};

export default TodoList;