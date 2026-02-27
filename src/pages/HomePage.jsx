import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

function HomePage() {
  const { data, loading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');

  if (loading) return <div className="loader">Gathering ingredients...</div>;
  if (error) return <div className="error">Something went wrong! {error}</div>;

  return(
    <div className="home-container">
      <h1>What are you in the mood for?</h1>
      <div className="category-grid">
        {data.categories.map((cat) => (
          <Link to={`/category/${cat.strCategory}`} key={cat.idCategory} className="category-card">
            <img src={cat.strCategoryThumb} alt={cat.strCategory} width="100" />
            <h2>{cat.strCategory}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;