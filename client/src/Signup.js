import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChatOverlay from "./components/LoginSignup/ChatOverlay";
import SwitchPage from "./components/LoginSignup/SwitchPage";
import Greeting from "./components/LoginSignup/Greeting";
import PrimaryButton from "./components/LoginSignup/PrimaryButton";

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
    padding: '2rem', 
    height: '100%',
    width: '60%',
  },
  formControl: {
    width:'100%',
    
  },
  buttonControl: {
    margin: 'auto',
  },
  input: {
    fontSize: '8rem',
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
        <Greeting greeting="Create an account."/>
          <form onSubmit={handleRegister}>
            <Grid container spacing={2} direction='column'>
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
                <PrimaryButton title="Create"/>
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
