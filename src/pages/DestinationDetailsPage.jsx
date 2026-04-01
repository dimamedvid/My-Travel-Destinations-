import { Link, useParams } from 'react-router';
import { useDestinations } from '../context/useDestinations.jsx';
import './Pages.css';

export default function DestinationDetailsPage() {
  const { id } = useParams();
  const { destinations } = useDestinations();

  const destination = destinations.find((item) => String(item.id) === id);

  if (!destination) {
    return (
      <main className="main">
        <section className="panel page-block">
          <h2 className="page-block__title">Destination Not Found</h2>
          <p className="page-block__text">
            Sorry, the destination with ID <strong>{id}</strong> does not exist.
          </p>
          <Link to="/destinations" className="page-block__link">
            Back to Destinations
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="main">
      <section className="panel page-block">
        <Link to="/destinations" className="page-block__link">
          Back to Destinations
        </Link>

        <div className="details-card">
          <img
            className="details-card__image"
            src={destination.image}
            alt={destination.name}
          />

          <div className="details-card__content">
            <h2 className="page-block__title">{destination.name}</h2>
            <p className="page-block__text"><strong>Country:</strong> {destination.country}</p>
            <p className="page-block__text"><strong>Rating:</strong> {destination.rating}</p>
            <p className="page-block__text">
              <strong>Status:</strong> {destination.visited ? 'Visited' : 'Planned'}
            </p>
            <p className="page-block__text">{destination.description}</p>
          </div>
        </div>
      </section>
    </main>
  );
}