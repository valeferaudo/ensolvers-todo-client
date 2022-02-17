import styles from './login.module.css';
import { login } from '../../Redux/Auth/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Spinner from '../Shared/Spinner';
import { useHistory } from 'react-router-dom';


function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const errorMsg = useSelector((state) => state.auth.messageText);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const history = useHistory();
  const [credentials, setCredentials] = useState({email:'', password:''});

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials)).then((response) => {
      if (response.type === 'LOGIN_FULFILLED') {
        history.push('/tasks')
      }
    })
  };
  if (isLoading)
    return <Spinner type="ThreeDots" color="#002147" height={80} width={80} />;
  return (
    <section className={styles.container}>
      <div className={styles.containerSummary}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <input
              name='email'
              placeholder='Enter your email'
              onChange={e => setCredentials({...credentials, email: e.target.value})}
              value={credentials.email}
            />
            <input
              name='password'
              type='password'
              placeholder='Enter your password'
              onChange={e => setCredentials({...credentials, password: e.target.value})}
              value={credentials.password}
            />
          </div>
          <div className={error ? styles.hidden : styles.visible}>
            <span className={styles.errorMsg}>{error ? errorMsg : ''}</span>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.btnLogin} type='submit'>
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
