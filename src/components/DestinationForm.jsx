import { useState } from 'react';
import { useDestinations } from '../context/useDestinations.jsx';
import { Button, Input } from './ui/index.js';
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
      <Input
        id="destination-name"
        label="Location name"
        type="text"
        placeholder="Enter location name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        id="destination-country"
        label="Country"
        type="text"
        placeholder="Enter country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <Button type="submit" variant="primary">
        Add destination
      </Button>
    </form>
  );
}