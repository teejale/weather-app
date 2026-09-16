import { NavLink } from "react-router";
import styles from "./NavLinks.module.scss";
const NavLinks = () => {
  return (
    <nav className={styles.navLink}>
      <ul>
        <li>
          <NavLink
            to="/weatherpage"
            // className={({ isActive }) =>
            //   isActive ? styles.activeLink : styles.link
            // }
          >
            Weatherpage
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
