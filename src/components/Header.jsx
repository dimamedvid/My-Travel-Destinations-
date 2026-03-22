import './Header.css';

export default function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div>
        <h1 className="header__title">{title}</h1>
        {subtitle && <p className="header__subtitle">{subtitle}</p>}
      </div>

      <button className="header__add" type="button" aria-label="Explore destinations">
        Explore Now
      </button>
    </header>
  );
}