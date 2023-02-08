import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarCSS from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={NavbarCSS.navbar}>
      <div className={NavbarCSS.navContainer}>
        <div className={NavbarCSS.iconContainer}>
          <FaGithub className={NavbarCSS.githubIcon} />
          <Link to="/" className={NavbarCSS.searcher}>
            Github Searcher
          </Link>
        </div>

        <div className={NavbarCSS.btnContainer}>
          <Link to="/" className={NavbarCSS.btn}>
            Home
          </Link>
          <Link to="/about" className={NavbarCSS.btn}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
