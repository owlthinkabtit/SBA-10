import Spinner from "../components/Spinner";
import RecipeCard from "../components/RecipeCard";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function SearchResultsPage() {
  const { searchQuery } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`,
  );

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Results for: "{searchQuery}"</h1>
      <div className="recipe-grid">
        {data.meals ? (
          data.meals.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />)
        ) : (
          <p>No recipes found. Try another word!</p>
        )}
      </div>
    </div>
  );
}

export default SearchResultsPage;
