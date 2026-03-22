import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export default function App() {
  const appTitle = 'My Travel Destinations';
  const appSubtitle = 'Explore popular places around the world';

  const destinations = [
    {
      id: 1,
      name: 'Paris',
      country: 'France',
      image:
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
      description:
        'Paris is famous for its romantic atmosphere, elegant architecture, world-class museums, and unforgettable city walks.',
      rating: 4.9,
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
    },
  ];

  return (
    <div className="app">
      <Header title={appTitle} subtitle={appSubtitle} />
      <Main destinations={destinations} />
      <Footer />
    </div>
  );
}