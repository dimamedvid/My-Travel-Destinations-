import { Link } from 'react-router';
import { useDestinations } from '../context/useDestinations.jsx';
import { Button, Card } from './ui/index.js';
import './CityItem.css';

export default function CityItem({ destination }) {
  const { toggleVisited } = useDestinations();

  const { id, name, country, image, description, rating, visited } = destination;

  return (
    <Card hoverable className={`city-card ${visited ? 'city-card--visited' : ''}`}>
      <div className="city-card__layout">
        <img className="city-card__image" src={image} alt={name} />

        <div className="city-card__content">
          <Card.Header className="city-card__header">
            <div>
              <Card.Title>{name}</Card.Title>
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
          </Card.Header>

          <Card.Body>
            <p className="city-card__description">{description}</p>
          </Card.Body>

          <Card.Footer className="city-card__actions">
            <Button
              variant="primary"
              size="sm"
              onClick={() => toggleVisited(id)}
            >
              {visited ? 'Mark as Planned' : 'Mark as Visited'}
            </Button>

            <Link to={`/destination/${id}`} className="city-card__details-link">
              <Button variant="secondary" size="sm">
                Details
              </Button>
            </Link>
          </Card.Footer>
        </div>
      </div>
    </Card>
  );
}