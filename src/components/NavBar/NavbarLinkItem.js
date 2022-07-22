import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavbarLinkItem = ({ to, title }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? styles.link_active : styles.link_inactive
        }
      >
        {title}
      </NavLink>
    </li>
  );
};

export default NavbarLinkItem;
