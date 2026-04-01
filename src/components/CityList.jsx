import CityItem from './CityItem.jsx';
import { useDestinations } from '../context/useDestinations.jsx';
import './CityList.css';

export default function CityList() {
  const { filteredDestinations } = useDestinations();

  return (
    <section className="city-list-section">
      <div className="city-list-section__heading">
        <h2 className="city-list-section__title">Popular Travel Destinations</h2>
        <p className="city-list-section__text">
          Explore several amazing cities with a short description and visitor status.
        </p>
      </div>

      {filteredDestinations.length === 0 ? (
        <p className="city-list-section__empty">
          No destinations found for this filter.
        </p>
      ) : (
        <div className="city-list">
          {filteredDestinations.map((destination) => (
            <CityItem
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      )}
    </section>
  );
}