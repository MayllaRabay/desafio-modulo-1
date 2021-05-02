import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <div className={styles.article__Container}>
      <article>
        <h1>Lorem ipsum dolor sit amet</h1>

        <h5>26/07/2020 às 00:04 - By: Fulano</h5>

        <img src="/pessoa.png" alt="Mulher usando headphone, com microfone de lapela e computador à sua frente, onde
          no computador está aberto um software de edição de áudio/vídeo." />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus quis augue elementum vestibulum. Nam a
           orci erat. Aenean arcu mauris, finibus a rutrum quis, commodo sollicitudin nibh. Morbi diam lacus, suscipit 
           nec maximus et, tincidunt at quam.
        </p>

        <p>Curabitur sit amet euismod mi. Duis dictum vel ipsum vel tempus. Etiam diam nisl, feugiat ornare enim ac, 
          aliquam ultrices erat. Nam tincidunt cursus dui. Integer varius nisi quis dui commodo, vitae euismod nisi 
          elementum. Vivamus tincidunt id massa eget blandit.
        </p>

        <a href="./continue-reading/article-1">
          <button>Continuar lendo</button>
        </a>
      </article>

      <article>
        <h1>Lorem ipsum dolor sit amet</h1>

        <h5>26/07/2020 às 00:04 - By: Fulano</h5>

        <img src="/computador.png" alt="Notebook aberto em cima da mesa." />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus quis augue elementum vestibulum. Nam a
           orci erat. Aenean arcu mauris, finibus a rutrum quis, commodo sollicitudin nibh. Morbi diam lacus, suscipit 
           nec maximus et, tincidunt at quam.
        </p>

        <p>Curabitur sit amet euismod mi. Duis dictum vel ipsum vel tempus. Etiam diam nisl, feugiat ornare enim ac, 
          aliquam ultrices erat. Nam tincidunt cursus dui. Integer varius nisi quis dui commodo, vitae euismod nisi 
          elementum. Vivamus tincidunt id massa eget blandit.
        </p>

        <a href="./continue-reading/article-2">
          <button>Continuar lendo</button>
        </a>
      </article>

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

        <a href="./continue-reading/article-3">
          <button>Continuar lendo</button>
        </a>
      </article>
    </div>
  );
}
