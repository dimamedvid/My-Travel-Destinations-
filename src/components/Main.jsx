import CitySearch from './CitySearch.jsx';
import CityList from './CityList.jsx';
import './Main.css';

export default function Main({ destinations }) {
  return (
    <main className="main">
      <section className="panel">
        <CitySearch />
        <CityList destinations={destinations} />
      </section>
    </main>
  );
}