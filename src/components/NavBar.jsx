import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <nav className="navbar">
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', alignContent: 'center' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">FavoritePage</Link></li>

        <li>
          <form onSubmit={handleSearch}>
            <input  
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit"></button>  
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
