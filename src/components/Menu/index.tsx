import styles from "./styles.module.scss";

export function Menu() {
  return (
    <div className={styles.menuContainer}>
      <input placeholder="Pesquise aqui..."></input>

      <h3>Categorias</h3>
        <ul>
          <li>
            <a href="#">
              Tecnologia<span>25</span>
            </a>
          </li>

          <li>
            <a href="#">
              Estilo de vida<span>8</span>
            </a>
          </li>

          <li>
            <a href="#">
              Arte<span>2</span>
            </a>
          </li>

          <li>
            <a href="#">
              Comida<span>12</span>
            </a>
          </li>

          <li>
            <a href="#">
              Aventura<span>9</span>
            </a>
          </li>

          <li>
            <a href="#">
              Moda<span>12</span>
            </a>
          </li>
        </ul>
      
      <h3>Publicidade</h3>
      <div className={styles.adContainer}>
        <div className={styles.adBox}>340x240</div>
        <div className={styles.adBox}>340x240</div>
        <div className={styles.adBox}>340x240</div>
      </div>
    </div>
  );
}