import './CityItem.css';

export default function CityItem({ destination, onToggleVisited }) {
  const { id, name, country, image, description, rating, visited } = destination;

  return (
    <article className={`city-card ${visited ? 'city-card--visited' : ''}`}>
      <img className="city-card__image" src={image} alt={name} />

      <div className="city-card__content">
        <div className="city-card__top">
          <div>
            <h3 className="city-card__title">{name}</h3>
            <p className="city-card__country">{country}</p>
          </div>

          <div className="city-card__meta">
            <span className="city-card__rating" aria-label={`Visitor rating ${rating}`}>
              ⭐ {rating}
            </span>
            <span className={`city-card__status ${visited ? 'city-card__status--visited' : ''}`}>
              {visited ? 'Visited' : 'Planned'}
            </span>
          </div>
        </div>

        <p className="city-card__description">{description}</p>

        <button
          className="city-card__button"
          type="button"
          onClick={() => onToggleVisited(id)}
        >
          {visited ? 'Mark as Planned' : 'Mark as Visited'}
        </button>
      </div>
    </article>
  );
}