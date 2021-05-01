import '../styles/global.scss';

import styles from '../styles/app.module.scss';

import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Footer} from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <main className={styles.main__Container}>
        <Component {...pageProps} />
        <Menu />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
