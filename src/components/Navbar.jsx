
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${search}`);
  };

  return (
    <nav className="navbar">
      <h2>Organic</h2>

      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/trending">Trending</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </form>
    </nav>
  );
}

export default Navbar;
