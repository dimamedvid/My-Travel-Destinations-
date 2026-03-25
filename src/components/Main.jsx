import CitySearch from './CitySearch.jsx';
import CityList from './CityList.jsx';
import './Main.css';

export default function Main({ destinations, onToggleVisited }) {
  return (
    <main className="main">
      <section className="panel">
        <CitySearch />
        <CityList
          destinations={destinations}
          onToggleVisited={onToggleVisited}
        />
      </section>
    </main>
  );
}