import CitySearch from './CitySearch.jsx';
import DestinationForm from './DestinationForm.jsx';
import CityList from './CityList.jsx';
import TravelersList from './TravelersList.jsx';
import { useDestinations } from '../context/useDestinations.jsx';
import './Main.css';

export default function Main() {
  const { filter, setFilter } = useDestinations();

  return (
    <main className="main">
      <section className="panel">
        <CitySearch />
        <DestinationForm />

        <div className="filter-bar">
          <button
            className={`filter-bar__button ${filter === 'all' ? 'filter-bar__button--active' : ''}`}
            type="button"
            onClick={() => setFilter('all')}
          >
            All
          </button>

          <button
            className={`filter-bar__button ${filter === 'planned' ? 'filter-bar__button--active' : ''}`}
            type="button"
            onClick={() => setFilter('planned')}
          >
            Planned
          </button>

          <button
            className={`filter-bar__button ${filter === 'visited' ? 'filter-bar__button--active' : ''}`}
            type="button"
            onClick={() => setFilter('visited')}
          >
            Visited
          </button>
        </div>

        <CityList />
        <TravelersList />
      </section>
    </main>
  );
}