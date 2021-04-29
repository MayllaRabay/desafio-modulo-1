import '../styles/global.scss';

import styles from '../styles/app.module.scss';

import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Footer} from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <main className={styles.mainContainer}>
        <Menu />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
