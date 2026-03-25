import CityItem from './CityItem.jsx';
import './CityList.css';

export default function CityList({ destinations, onToggleVisited }) {
  return (
    <section className="city-list-section">
      <div className="city-list-section__heading">
        <h2 className="city-list-section__title">Popular Travel Destinations</h2>
        <p className="city-list-section__text">
          Explore several amazing cities with a short description and visitor status.
        </p>
      </div>

      <div className="city-list">
        {destinations.map((destination) => (
          <CityItem
            key={destination.id}
            destination={destination}
            onToggleVisited={onToggleVisited}
          />
        ))}
      </div>
    </section>
  );
}