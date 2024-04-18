import { useContext, useEffect } from "react";
import TodoList from "../components/TodoList";
import { FullToDoList } from "../components/Context";
import AddItem from "../components/AddItem";

const Home = () => {
    const { todoList, setTodoList } = useContext(FullToDoList);

    useEffect(() => {
        fetch("http://localhost:2003/api/v1/todos", { method: "GET" })
            .then((res) => res.json())
            .then((data) => setTodoList(data)).catch((err) => console.log(err));
    }, []);


    return <section>
        <h1>Home</h1>
        <TodoList />
        <AddItem />
    </section>;
};

export default Home;