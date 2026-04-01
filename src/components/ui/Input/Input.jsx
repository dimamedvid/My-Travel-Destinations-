import styles from './Input.module.css';

export default function Input({
  label,
  id,
  className = '',
  ...rest
}) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      <input
        id={id}
        className={`${styles.input} ${className}`.trim()}
        {...rest}
      />
    </div>
  );
}