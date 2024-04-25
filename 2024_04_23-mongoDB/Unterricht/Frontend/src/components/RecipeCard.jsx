import { backendUrl } from "../api/api";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    return <section>
        <Link to={`/recipe/${recipe._id}`}>
            <div className="flex flex-col p-2">
                <img src={`${backendUrl}/${recipe.url}`} alt="" />
                <p>{recipe.name}</p>
            </div>
        </Link>

    </section>;
};

export default RecipeCard;