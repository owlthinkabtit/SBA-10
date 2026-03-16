import { useFavorites } from "../context/FavoritesContext";
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';



function RecipesDetailPage() {
  const {recipeId } = useParams();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const heartClicked = isFavorite(recipeId);
  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);

  if (loading) return <p>Loading recipe details...</p>;
  if (error) return <p>ErrorL {error}</p>

  const meal = data.meals[0];

  return (
    <div className="recipe-detail">
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '300px'}} />
      <div>
        <button onClick={() => heartClicked ? removeFavorite(recipeId) : addFavorite(recipeId)}>
          {heartClicked ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
        </button>
      </div>
      <h3>Instructions</h3>
      <p>{meal.strInstructions}</p>
    </div>
  )
}

export default RecipesDetailPage;