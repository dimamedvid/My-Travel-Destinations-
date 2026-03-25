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

      <button className="header__add" type="button" aria-label="Explore destinations">
        Explore Now
      </button>
    </header>
  );
}