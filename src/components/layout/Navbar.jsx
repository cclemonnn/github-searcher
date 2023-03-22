import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import n from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={n.navbar}>
      <div className={n.navContainer}>
        <div className={n.iconContainer}>
          <FaGithub className={n.githubIcon} />
          <Link to="/" className={n.searcher}>
            Github Profile Explorer
          </Link>
        </div>

        <div className={n.btnContainer}>
          <NavLink
            to="/"
            end
            className={n.btn}
            style={({ isActive }) => ({
              display: isActive ? "none" : "block",
            })}
          >
            Back to Search
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
