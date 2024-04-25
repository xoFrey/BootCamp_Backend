import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import Details from "./pages/Details";

function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/add" element={<AddRecipe />} />
        <Route path="/recipe/edit" element={<EditRecipe />} />
        <Route path="/recipe/:recipeID" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
