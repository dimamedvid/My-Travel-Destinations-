import CitySearch from './CitySearch.jsx';
import CityList from './CityList.jsx';
import './Main.css';

export default function Main({
  destinations,
  filter,
  onFilterChange,
  onToggleVisited,
}) {
  return (
    <main className="main">
      <section className="panel">
        <CitySearch />

        <div className="filter-bar">
          <button
            className={`filter-bar__button ${filter === 'all' ? 'filter-bar__button--active' : ''}`}
            type="button"
            onClick={() => onFilterChange('all')}
          >
            All
          </button>

          <button
            className={`filter-bar__button ${filter === 'planned' ? 'filter-bar__button--active' : ''}`}
            type="button"
            onClick={() => onFilterChange('planned')}
          >
            Planned
          </button>

          <button
            className={`filter-bar__button ${filter === 'visited' ? 'filter-bar__button--active' : ''}`}
            type="button"
            onClick={() => onFilterChange('visited')}
          >
            Visited
          </button>
        </div>

        <CityList
          destinations={destinations}
          onToggleVisited={onToggleVisited}
        />
      </section>
    </main>
  );
}