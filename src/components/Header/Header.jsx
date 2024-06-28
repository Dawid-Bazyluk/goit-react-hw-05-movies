import css from "./Header.module.scss";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <nav className={css.headerNav}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
