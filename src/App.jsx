import { Routes, Route } from 'react-router';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import DestinationsPage from './pages/DestinationsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import DestinationDetailsPage from './pages/DestinationDetailsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { useDestinations } from './context/useDestinations.jsx';
import './App.css';

export default function App() {
  const appTitle = 'My Travel Destinations';
  const appSubtitle = 'Explore popular places around the world';

  const { visitedCount, totalCount } = useDestinations();

  return (
    <div className="app">
      <Header
        title={appTitle}
        subtitle={appSubtitle}
        visitedCount={visitedCount}
        totalCount={totalCount}
      />

      <Routes>
        <Route
          path="/"
          element={<HomePage title={appTitle} subtitle={appSubtitle} />}
        />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destination/:id" element={<DestinationDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}