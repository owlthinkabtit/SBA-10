import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import RecipesPage from './pages/RecipesPage'
import RecipesDetailPage from './pages/RecipesDetailPage'
import FavoritesPage from './pages/FavoritesPage'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipe/:recipeId" element={<RecipesDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/category/:categoryName" element={<RecipesPage />} />
      </Routes>
    </Router>
  );
}

export default App
