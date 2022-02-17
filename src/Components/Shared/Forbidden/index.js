import { useHistory } from 'react-router-dom';
import styles from './forbidden.module.css';

function Forbidden() {
  const history = useHistory();

  return (
    <section className={styles.container}>
      <div className={styles.containerDesc}>
        <h1 className={styles.title}>FORBIDDEN</h1>
        <h2 className={styles.title}>403</h2>
        <p className={styles.description}>
          We are sorry, but you do not have access to this page or resource.
        </p>
      </div>
      <div className={styles.containerButton}>
        <button className={styles.btnJoinUs} onClick={() => history.push('/login')}>
          Go Login!
        </button>
      </div>
    </section>
  );
}

export default Forbidden;