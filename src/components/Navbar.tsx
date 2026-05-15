// Your site must include a reusable navigation bar that appears on every page.
// It should include links to all main pages, clearly indicate the current page, and remain fixed at the top of the screen.
// The navigation bar should also include the application name or logo, which links back to the main page
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <div className={styles.logo}>SportsDB</div>
      </Link>

      <ul className={styles.links}>
        <li>
          <Link to="/leagues">Leagues</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
