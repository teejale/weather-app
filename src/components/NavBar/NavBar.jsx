import { NavLink } from "react-router";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
