import Spinner from "../components/Spinner";
import useFetch from "../hooks/useFetch";
import { useParams, Link } from "react-router-dom";

function RecipesPage() {
  const { categoryName } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
  );

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{categoryName} Recipes</h1>
      <div className="recipe-grid">
        {data.meals.map((meal) => (
          <Link
            to={`/recipe/${meal.idMeal}`}
            key={meal.idMeal}
            className="recipe-card"
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
            <h3>{meal.strMeal}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecipesPage;
