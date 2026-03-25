import { NavLink } from 'react-router';
import './Header.css';

export default function Header({ title, subtitle, visitedCount, totalCount }) {
  return (
    <header className="header">
      <div>
        <h1 className="header__title">{title}</h1>
        <p className="header__subtitle">{subtitle}</p>
        <p className="header__counter">
          Visited: {visitedCount} / {totalCount}
        </p>
      </div>

      <nav className="nav">
        <NavLink to="/" end className="nav__link">
          Home
        </NavLink>
        <NavLink to="/destinations" className="nav__link">
          Destinations
        </NavLink>
        <NavLink to="/about" className="nav__link">
          About
        </NavLink>
      </nav>
    </header>
  );
}