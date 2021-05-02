import styles from '../styles/contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.contact__Container}>
      <h1>Contato</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus quis augue elementum vestibulum. Nam a 
        orci erat. Aenean arcu mauris, finibus a rutrum quis, commodo sollicitudin nibh. Morbi diam lacus, suscipit 
        nec maximus et, tincidunt at quam.
      </p>

      <h3>Informações para contato</h3>

      <div>
        <div className={styles.info}>
          <img src="/localizacao.png" alt="" /><strong>Endereço</strong>
        </div>
        <p>Av. Tancredo Neves, 2227, Ed. Salvador Prime Caminho das Árvores, Salvador • Bahia</p>
      </div>

      <div>
        <div className={styles.info}>
          <img src="/telefone.png" alt="" /><strong>Telefone</strong>
        </div>
        <p>(71) 9 9999-9999 | (11) 1 1111-1111</p>
      </div>

      <div>
        <div className={styles.info}>
          <img src="/headset.png" alt="" /><strong>Suporte</strong>
        </div>
        <p>suporte@cubos.academy</p>
      </div>

      <h3>Entre em contato</h3>

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
          <span>Assunto</span>
          <input id="subject" name="subject"></input>
        </label>

        <label>
          <span>Comentário</span>
          <textarea id="comentary" name="comentary" rows={10}></textarea>
        </label>

        <button>Enviar</button>
      </form>
    </div>
  );
}