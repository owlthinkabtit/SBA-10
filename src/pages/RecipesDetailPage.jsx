import { useFavorites } from "../context/FavoritesContext";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";

function RecipesDetailPage() {
  const { recipeId } = useParams();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const heartClicked = isFavorite(recipeId);
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
  );
  const meal = data.meals[0];
  const instructionsSteps = meal.strInstructions.split(".").filter((step) => step.trim().length > 0);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className="recipe-detail">
      <h1>{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        style={{ width: "100px" }}
      />
      <h3>Instructions</h3>
      <ol>
        {instructionsSteps.map((step, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {step.trim()}.
          </li>
        ))}
      </ol>
      <div>
        <button
          onClick={() =>
            heartClicked ? removeFavorite(recipeId) : addFavorite(recipeId)
          }
        >
          {heartClicked ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default RecipesDetailPage;
