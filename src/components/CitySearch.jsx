import './CitySearch.css';

export default function CitySearch() {
  return (
    <section className="city-search" aria-label="Destination search and filters">
      <div className="city-search__group city-search__group--large">
        <label className="city-search__label" htmlFor="destination-search">
          Search destination
        </label>
        <input
          className="city-search__input"
          id="destination-search"
          type="text"
          placeholder="Enter city or country"
        />
      </div>

      <div className="city-search__group">
        <label className="city-search__label" htmlFor="destination-region">
          Region
        </label>
        <select className="city-search__select" id="destination-region" defaultValue="all">
          <option value="all">All regions</option>
          <option value="europe">Europe</option>
          <option value="asia">Asia</option>
          <option value="america">America</option>
        </select>
      </div>

      <div className="city-search__group">
        <label className="city-search__label" htmlFor="destination-rating">
          Rating
        </label>
        <select className="city-search__select" id="destination-rating" defaultValue="all">
          <option value="all">Any rating</option>
          <option value="4.5">4.5+</option>
          <option value="4.7">4.7+</option>
          <option value="4.8">4.8+</option>
        </select>
      </div>

      <button className="city-search__button" type="button">
        Find places
      </button>
    </section>
  );
}