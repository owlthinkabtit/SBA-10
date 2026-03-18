import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";

function CategoryPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { data, loading, error} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );

  if (loading) return <Spinner />
  if (error) return <p>Error: {error} </p>

  return (
    <div>
      <button onClick={() => navigate("/")} style={{ marginBottom: '20px', cursor: 'pointer'}}>
        ← Back to Categories
      </button>
      <h1>{categoryName} Recipes</h1>
      <div className="recipe-grid">
        {data.meals && data.meals.map((meal) => (
         <RecipeCard key={meal.idMeal} meal={meal} /> 
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;