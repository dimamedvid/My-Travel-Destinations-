import Main from '../components/Main.jsx';

export default function DestinationsPage({
  destinations,
  filter,
  onFilterChange,
  onToggleVisited,
  onAddDestination,
}) {
  return (
    <Main
      destinations={destinations}
      filter={filter}
      onFilterChange={onFilterChange}
      onToggleVisited={onToggleVisited}
      onAddDestination={onAddDestination}
    />
  );
}