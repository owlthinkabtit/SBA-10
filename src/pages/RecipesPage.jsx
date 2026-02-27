import useFetch from '../hooks/useFetch';

function RecipesPage() {
  const { data, loading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  if (loading) return <p>Yummy recipes are on their way...</p>
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      <h1>Seafood Recipes</h1>
      <div className="recipe-grid">
        {data.meals.map((meal) => (
          <div key={meal.idMeal} className="recipe-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
            <h3>{meal.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;