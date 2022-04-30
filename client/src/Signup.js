import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChatOverlay from "./components/LoginSignup/ChatOverlay";
import SwitchPage from "./components/LoginSignup/SwitchPage";
import Greeting from "./components/LoginSignup/Greeting";

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
    marginBottom: 'auto', 
    padding: '24px', 
    height: '40%',
    width: '50%',
  },
  formControl: {
    width:'100%'
  },
  buttonControl: {
    margin: 'auto',
  }
}));

const loginLink = {
  prompt: 'Need to log in?',
  link: '/login',
  title: 'Login'
}

const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = useStyles();
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={5}>
        <ChatOverlay />
      </Grid>
      <Grid item xs={7}>
        <Box className={classes.UIContainer}>
          <SwitchPage {...loginLink}/>
        <Box className={classes.formContainer}>
        <Greeting greeting="Create an Account."/>
          <form onSubmit={handleRegister}>
            <Grid container spacing={5} direction='column'>
              <Grid item>
                <FormControl className={classes.formControl}>
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl error={!!formErrorMessage.confirmPassword}
                className={classes.formControl}>
                  <TextField
                    aria-label="password"
                    label="Password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="password"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl error={!!formErrorMessage.confirmPassword}
                className={classes.formControl}>
                  <TextField
                    label="Confirm Password"
                    aria-label="confirm password"
                    type="password"
                    inputProps={{ minLength: 6 }}
                    name="confirmPassword"
                    required
                  />
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item className={classes.buttonControl}>
                <Button type="submit" color="primary" variant="contained" size="large" >
                  Create
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

export default Signup;
