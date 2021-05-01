import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header__Container}>
      <img src="/logo.svg" alt="Logoipsum" />

      <nav className="links">
        <a href="/">Início</a>
        <a href="#">Sobre</a>
        <a href="/contact">Contato</a>
      </nav>
    </header>
  );
}