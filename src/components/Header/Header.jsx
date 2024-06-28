import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <nav className={style.headerNav}>
        <NavLink className={style.link} to="/">
          Home
        </NavLink>
        <NavLink className={style.link} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
