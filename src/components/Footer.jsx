import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <small>© {year} My Travel Destinations, demo application</small>
    </footer>
  );
}