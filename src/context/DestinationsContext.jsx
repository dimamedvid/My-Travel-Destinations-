import { useEffect, useMemo, useState } from 'react';
import DestinationsContext from './destinations-context.js';

const initialDestinations = [
  {
    id: 1,
    name: 'Paris',
    country: 'France',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    description:
      'Paris is famous for its romantic atmosphere, elegant architecture, world-class museums, and unforgettable city walks.',
    rating: 4.9,
    visited: false,
  },
  {
    id: 2,
    name: 'Tokyo',
    country: 'Japan',
    image:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    description:
      'Tokyo combines modern technology, traditional culture, bright city lights, and an incredible variety of food and entertainment.',
    rating: 4.8,
    visited: true,
  },
  {
    id: 3,
    name: 'Rome',
    country: 'Italy',
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80',
    description:
      'Rome offers ancient landmarks, beautiful squares, delicious cuisine, and a rich historical atmosphere in every district.',
    rating: 4.7,
    visited: false,
  },
  {
    id: 4,
    name: 'Barcelona',
    country: 'Spain',
    image:
      'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80',
    description:
      'Barcelona attracts visitors with colorful architecture, Mediterranean beaches, lively streets, and unique local culture.',
    rating: 4.8,
    visited: true,
  },
];

export function DestinationsProvider({ children }) {
  const [destinations, setDestinations] = useState(() => {
    const storedDestinations = localStorage.getItem('travel-destinations-data');

    if (storedDestinations) {
      return JSON.parse(storedDestinations);
    }

    return initialDestinations;
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('travel-destinations-data', JSON.stringify(destinations));
  }, [destinations]);

  function toggleVisited(id) {
    setDestinations((prevDestinations) =>
      prevDestinations.map((destination) =>
        destination.id === id
          ? { ...destination, visited: !destination.visited }
          : destination
      )
    );
  }

  function addDestination(newDestination) {
    setDestinations((prevDestinations) => [...prevDestinations, newDestination]);
  }

  const visitedCount = useMemo(
    () => destinations.filter((destination) => destination.visited).length,
    [destinations]
  );

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      if (filter === 'visited') return destination.visited;
      if (filter === 'planned') return !destination.visited;
      return true;
    });
  }, [destinations, filter]);

  const value = {
    destinations,
    filteredDestinations,
    filter,
    setFilter,
    visitedCount,
    totalCount: destinations.length,
    toggleVisited,
    addDestination,
  };

  return (
    <DestinationsContext.Provider value={value}>
      {children}
    </DestinationsContext.Provider>
  );
}