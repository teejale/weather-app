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
              role="link"
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
