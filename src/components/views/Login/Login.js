import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const Login = () => (
  <form className={styles.component}>
    <TextField
      className={styles.input}
      id="outlined-basic"
      label="Login/e-mail"
      variant="outlined" />
    <TextField className={styles.input}
      id="outlined-password-input"
      label="Password"
      type="password"
      variant="outlined" />
    <Button
      className = {styles.button}
      component={NavLink} to={`${process.env.PUBLIC_URL}/`}
      variant="contained"
      color="primary">
      Login
    </Button>


  </form>
);

export default Login;