import { useFavorites } from "../context/FavoritesContext";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";

function FavoritesPage() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  if (favorites.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Your favorites list is empty!</h2>
        <p>Go to the Home Page to discover some delicious recipes!</p>
        <Link to="/">Browse Recipes</Link>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate("/")} style={{ marginBottom: "20px" }}>
        ← Back to Home
      </button>
      <h1>My Favorite Recipes</h1>
      <div className="recipe-grid">
        {favorites.map((id) => (
          <FavoriteItem key={id} id={id} />
        ))}
      </div>
    </div>
  );
}

function FavoriteItem({ id }) {
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );

  if (loading) return <Spinner />;
  if (error || !data) return null;

  const meal = data.meals[0];

  return (
    <Link to={`/recipe/${meal.idMeal}`} className="recipe-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} width="150" />
      <h3>{meal.strMeal}</h3>
    </Link>
  );
}

export default FavoritesPage;
