import { useContext, useState } from "react";
import { FullToDoList } from "./Context";

const DeleteItem = ({ todo }) => {


    const { setTodoList } = useContext(FullToDoList);
    const deleteItem = () => {
        fetch(`http://localhost:2003/api/v1/todos/${todo.id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => setTodoList(data)) // setTransactions kommt vom Parent-Component und ermöglicht, den dort vorhanden state (transactions) zu überschreiben
            .catch((err) => console.log(err));
    };



    return <>
        <button onClick={() => deleteItem()}>Delete</button>
    </>;
};

export default DeleteItem;