import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/"><li>Home</li></Link>
      <Link to="/recipes"><li>RecipePage</li></Link>
      <Link to="/favorites"><li>FavoritePage</li></Link>
    </div>
  );
}

export default NavBar;
