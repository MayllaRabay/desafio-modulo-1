import styles from '../../styles/articles.module.scss';

export default function Article() {
  return(
    <div className={styles.article__Container}>
      <article>
        <h1>Lorem ipsum dolor sit amet</h1>

        <h5>26/07/2020 às 00:04 - By: Fulano</h5>

        <img src="/pintura.png" alt="Mão segurando um pincel de rolo." />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus quis augue elementum vestibulum. Nam a
          orci erat. Aenean arcu mauris, finibus a rutrum quis, commodo sollicitudin nibh. Morbi diam lacus, suscipit
          nec maximus et, tincidunt at quam.
        </p>

        <p>Curabitur sit amet euismod mi. Duis dictum vel ipsum vel tempus. Etiam diam nisl, feugiat ornare enim ac,
          aliquam ultrices erat. Nam tincidunt cursus dui. Integer varius nisi quis dui commodo, vitae euismod nisi
          elementum. Vivamus tincidunt id massa eget blandit.
        </p>

        <div className={styles.list}>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur.
              <ul className={styles.inner__List}>
                <li>Lorem, ipsum dolor.</li>
                <li>Numquam, similique debitis!</li>
                <li>Itaque, nam labore?</li>
              </ul>
            </li>
            <li>Quibusdam sapiente velit nulla delectus enim?</li>
            <li>Officia dolore autem sint aliquid commodi!</li>
            <li>Eius asperiores deserunt aliquid animi quo.</li>
            <li>Saepe explicabo blanditiis aspernatur suscipit voluptates.</li>
          </ul>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus quis augue elementum vestibulum. Nam a 
          orci erat. Aenean arcu mauris, finibus a rutrum quis, commodo sollicitudin nibh. Morbi diam lacus, suscipit 
          nec maximus et, tincidunt at quam. 
        </p>

        <p>
          <i>Curabitur sit amet euismod mi. Duis dictum vel ipsum vel tempus. Etiam diam nisl, feugiat ornare enim ac, 
            aliquam ultrices erat. Nam tincidunt cursus dui. Integer varius nisi quis dui commodo, vitae euismod nisi 
            elementum. Vivamus tincidunt id massa eget blandit.
          </i>
        </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus quis augue elementum vestibulum. Nam a 
          orci erat. Aenean arcu mauris, finibus a rutrum quis, commodo sollicitudin nibh. Morbi diam lacus, suscipit nec
          maximus et, tincidunt at quam.
        </p>

        <p>Curabitur sit amet euismod mi. Duis dictum vel ipsum vel tempus. Etiam diam nisl, feugiat ornare enim ac, 
          aliquam ultrices erat. Nam tincidunt cursus dui. Integer varius nisi quis dui commodo, vitae euismod nisi 
          elementum. Vivamus tincidunt id massa eget blandit.
        </p>
      </article>

      <h1>Comentários</h1>

      <form>
        <div className={styles.form__Name__Email}>
          <label>
            <span>Nome</span>
            <input id="name" name="name"></input>
          </label>

          <label>
            <span>E-mail</span>
            <input id="email" name="email" type="email"></input>
          </label>
        </div>

        <label>
          <span>Comentário</span>
          <textarea id="comentario" name="comentario" rows={10}></textarea>
        </label>

        <button>Comentar</button>
      </form>
    </div>
  );
}