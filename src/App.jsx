import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import RecipesDetailPage from './pages/RecipesDetailPage'
import FavoritesPage from './pages/FavoritesPage'
import SearchResultsPage from './pages/SearchResultsPage';
import CategoryPage from './pages/CategoryPage';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchQuery" element={<SearchResultsPage />} />
        <Route path="/recipe/:recipeId" element={<RecipesDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/search/:searchQuery" element={<SearchResultsPage />} />
       
      </Routes>
    </Router>
  );
}

export default App
