import { useEffect, useState } from "react";
import { backendUrl } from "../api/api";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch(`${backendUrl}/api/v1/recipes`)
            .then((res) => res.json())
            .then((data) => setRecipe(data))
            .catch((err) => console.log(err));
    }, []);

    console.log(recipe);

    return <section>
        <h1>Home</h1>

        {recipe.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe._id} />
        ))}
    </section>;
};

export default Home;