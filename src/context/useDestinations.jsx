import { useContext } from 'react';
import DestinationsContext from './destinations-context.js';

export function useDestinations() {
  const context = useContext(DestinationsContext);

  if (!context) {
    throw new Error('useDestinations must be used within DestinationsProvider');
  }

  return context;
}