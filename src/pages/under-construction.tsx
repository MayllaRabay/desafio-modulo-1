import styles from '../styles/construction.module.scss';

export default function Construction() {
  return(
    <div className={styles.construction__Container}>
      <h1>Página em construção</h1>
      <img src="/under-construction.svg" />
    </div>
  );
}