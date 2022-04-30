import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ChatOverlay from './components/LoginSignup/ChatOverlay'
import SwitchPage from './components/LoginSignup/SwitchPage'
import Greeting from './components/LoginSignup/Greeting';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  UIContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    margin: 'auto', 
    padding: '36px', 
    height: '80%',
    width: '50%',
  },
  formControl: {
    width:'100%'
  },
  buttonControl: {
    margin: 'auto',
  }
}));

const signupLink = {
  prompt: "Don't have an account?",
  link: '/register',
  title: 'Create Account'
}

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={5}>
        <ChatOverlay />
      </Grid>
      <Grid item xs={7}>
        <Box className={classes.UIContainer}>
          <SwitchPage {...signupLink} />
        <Box className={classes.formContainer}>
        <Greeting greeting="Welcome Back!"/>
        <form onSubmit={handleLogin}>
          <Grid container spacing={4} direction='column'>
            <Grid item>
              <FormControl margin="normal" required className={classes.formControl} >
                <TextField
                  aria-label="username"
                  label="username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl margin="normal" required className={classes.formControl} >
                <TextField
                  label="password"
                  aria-label="password"
                  type="password"
                  name="password"
                />
              </FormControl>
            </Grid>
            <Grid item className={classes.buttonControl} >
                <Button color="primary" type="submit" variant="contained" size="large" >
                  Login
                </Button>
            </Grid>
          </Grid>
        </form>
        </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
