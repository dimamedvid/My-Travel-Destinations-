import './Pages.css';

export default function HomePage({ title, subtitle }) {
  return (
    <main className="main">
      <section className="panel page-block">
        <h2 className="page-block__title">Welcome to {title}</h2>
        <p className="page-block__text">{subtitle}</p>
        <p className="page-block__text">
          This application helps users explore travel destinations, manage their personal list,
          and view details about each location.
        </p>
      </section>
    </main>
  );
}