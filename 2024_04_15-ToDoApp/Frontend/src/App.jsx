
import { useState } from 'react';
import './App.css'
import Home from './pages/Home';
import { FullToDoList} from "./components/Context.jsx"

function App() {
  const [todoList, setTodoList] = useState([]);



  return (
    <>
    <FullToDoList.Provider value={{ todoList, setTodoList}}>
     <Home/>
     </FullToDoList.Provider>
    </>
  )
}

export default App
