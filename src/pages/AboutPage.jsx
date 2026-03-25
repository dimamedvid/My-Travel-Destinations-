import './Pages.css';

export default function AboutPage() {
  return (
    <main className="main">
      <section className="panel page-block">
        <h2 className="page-block__title">About the Application</h2>
        <p className="page-block__text">
          My Travel Destinations is a React application created during practical laboratory work.
        </p>
        <p className="page-block__text">
          The project demonstrates component architecture, state management, filtering,
          controlled forms, localStorage persistence, asynchronous API loading, and routing.
        </p>
      </section>
    </main>
  );
}