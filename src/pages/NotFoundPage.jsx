import { Link } from 'react-router';
import './Pages.css';

export default function NotFoundPage() {
  return (
    <main className="main">
      <section className="panel page-block">
        <h2 className="page-block__title">404 - Page Not Found</h2>
        <p className="page-block__text">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="page-block__link">
          Return Home
        </Link>
      </section>
    </main>
  );
}