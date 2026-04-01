import styles from './Card.module.css';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Card({ children, hoverable = false, className = '' }) {
  return (
    <article className={cn(styles.card, hoverable && styles.hoverable, className)}>
      {children}
    </article>
  );
}

function Header({ children, className = '' }) {
  return <div className={cn(styles.header, className)}>{children}</div>;
}

function Title({ children, className = '' }) {
  return <h3 className={cn(styles.title, className)}>{children}</h3>;
}

function Body({ children, className = '' }) {
  return <div className={cn(styles.body, className)}>{children}</div>;
}

function Footer({ children, className = '' }) {
  return <div className={cn(styles.footer, className)}>{children}</div>;
}

Card.Header = Header;
Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;