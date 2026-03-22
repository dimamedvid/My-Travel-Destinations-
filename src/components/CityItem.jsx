import './CityItem.css';

export default function CityItem({ destination }) {
  const { name, country, image, description, rating } = destination;

  return (
    <article className="city-card">
      <img className="city-card__image" src={image} alt={name} />

      <div className="city-card__content">
        <div className="city-card__top">
          <div>
            <h3 className="city-card__title">{name}</h3>
            <p className="city-card__country">{country}</p>
          </div>

          <span className="city-card__rating" aria-label={`Visitor rating ${rating}`}>
            ⭐ {rating}
          </span>
        </div>

        <p className="city-card__description">{description}</p>

        <button className="city-card__button" type="button">
          View Destination
        </button>
      </div>
    </article>
  );
}