import {Link} from "react-router-dom";
import "../css/Navbar.css"
function NavBar() {
  return (
    <nav className="navbar">
        <div className="nav_logo">
            <Link to= "/">Movie Haven</Link>
        </div>
        <div className="nav_links">
            <Link to="/" className="nav_link">Home</Link>
            <Link to="/favorite" className="nav_link">Favorite</Link>

        </div>
    </nav>
  );
}
export default NavBar;