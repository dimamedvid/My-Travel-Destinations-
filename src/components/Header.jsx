import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">My Travel Destinations</h1>
      <button className="header__add" type="button" aria-label="Explore destinations">
        Explore Now
      </button>
    </header>
  );
}