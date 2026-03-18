import { useFavorites } from "../context/FavoritesContext";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";

function RecipesDetailPage() {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
  );
  if (loading) return <Spinner />;
  if (error || !data || !data.meals) return <p>Error: {error || "Recipe not found."}</p>;

  const meal = data.meals[0];
  const heartClicked = isFavorite(recipeId);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }
  const instructionsSteps = meal.strInstructions.split(".").filter((step) => step.trim().length > 0);


  return (
    <div className="recipe-detail">
      <button onClick={() => navigate(-1)} stype={{ marginBottom: '20px' }}>
        ← Back
      </button>
      <h1>{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        style={{ width: "300px" }}
      />
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
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
