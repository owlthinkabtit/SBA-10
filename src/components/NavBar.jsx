import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        <Link to="/"><li>Home</li></Link>
        <Link to="/recipes"><li>RecipePage</li></Link>
        <Link to="/favorites"><li>FavoritePage</li></Link>
      </ul>
    </nav>
  );
}

export default NavBar;
