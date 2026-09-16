import { NavLink } from "react-router";

const NavLinks = () => {
  return (
    <nav>
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
