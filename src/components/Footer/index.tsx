import styles from './style.module.scss';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>Copyright ©2021 Todos os direitos reservados | by 
        <a href="https://www.linkedin.com/in/mayllarabay/" target="_blank">Maylla Rabay</a>
      </p>
    </footer>
  );
}