import { useEffect, useState } from 'react';
import './TravelersList.css';

export default function TravelersList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadTravelers() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://dummyjson.com/users?limit=6');

        if (!response.ok) {
          throw new Error(`Request error: ${response.status}`);
        }

        const data = await response.json();
        setItems(data.users);
      } catch (e) {
        setError(e.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadTravelers();
  }, []);

  return (
    <section className="travelers-section">
      <div className="travelers-section__heading">
        <h2 className="travelers-section__title">Travel Community</h2>
        <p className="travelers-section__text">
          Discover travelers loaded asynchronously from a public API.
        </p>
      </div>

      {loading && <p className="travelers-section__state">Loading travelers...</p>}

      {error && (
        <p className="travelers-section__state travelers-section__state--error">
          Error: {error}
        </p>
      )}

      {!loading && !error && (
        <div className="travelers-list">
          {items.map((user) => (
            <article className="traveler-card" key={user.id}>
              <img
                className="traveler-card__image"
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
              />

              <div className="traveler-card__content">
                <h3 className="traveler-card__title">
                  {user.firstName} {user.lastName}
                </h3>
                <p className="traveler-card__info">Email: {user.email}</p>
                <p className="traveler-card__info">City: {user.address.city}</p>
                <p className="traveler-card__info">Country: {user.address.country}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}