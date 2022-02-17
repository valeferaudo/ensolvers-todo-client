import styles from './header.module.css';
import { Link, useHistory } from 'react-router-dom';

function Header(props) {
  const history = useHistory();

  const handleLogOut = () => {
    sessionStorage.removeItem('isAuthenticated', true);
    history.push('/login');
  };
  return (
    <header className={styles.header}>
      <div className={styles.superior}>
      <button className={styles.btnLogout} onClick={handleLogOut}>
          LOGOUT
        </button>
      </div>
      <div className={styles.middle}>
        <div className={styles.logoContainer}>
          <span className={styles.title}>TO DO</span>
        </div>
      </div>
      <div>
        <nav className={styles.navbar}>
          <ul className={styles.routes}>
              <li>{<Link to="/tasks">Tasks</Link>}</li>
              <li>{<Link to="/folders">Folders</Link>}</li>

          </ul>
        </nav>      
      </div>
    </header>
  );
}

export default Header;
