import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import n from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={n.navbar}>
      <div className={n.navContainer}>
        <div className={n.iconContainer}>
          <FaGithub className={n.githubIcon} />
          <Link to="/" className={n.searcher}>
            Github Searcher
          </Link>
        </div>

        <div className={n.btnContainer}>
          <Link to="/" className={n.btn}>
            Home
          </Link>
          <Link to="/about" className={n.btn}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
