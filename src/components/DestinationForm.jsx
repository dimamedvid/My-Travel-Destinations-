import { useState } from 'react';
import { useDestinations } from '../context/useDestinations.jsx';
import './DestinationForm.css';

export default function DestinationForm() {
  const { addDestination } = useDestinations();

  const [name, setName] = useState('');
  const [country, setCountry] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) return;
    if (!country.trim()) return;

    const newDestination = {
      id: Date.now(),
      name: name.trim(),
      country: country.trim(),
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      description: 'Newly added travel destination.',
      rating: 4.5,
      visited: false,
    };

    addDestination(newDestination);

    setName('');
    setCountry('');
  }

  return (
    <form className="destination-form" onSubmit={handleSubmit}>
      <div className="destination-form__group">
        <label className="destination-form__label" htmlFor="destination-name">
          Location name
        </label>
        <input
          className="destination-form__input"
          id="destination-name"
          type="text"
          placeholder="Enter location name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="destination-form__group">
        <label className="destination-form__label" htmlFor="destination-country">
          Country
        </label>
        <input
          className="destination-form__input"
          id="destination-country"
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      <button className="destination-form__button" type="submit">
        Add destination
      </button>
    </form>
  );
}