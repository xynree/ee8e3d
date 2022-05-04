import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChatOverlay from "./components/LoginSignup/ChatOverlay";
import SwitchPage from "./components/LoginSignup/SwitchPage";
import Greeting from "./components/LoginSignup/Greeting";
import InputForm from './components/LoginSignup/InputForm';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "100vh",
  },
  overlayContainer: {
    [theme.breakpoints.up('xs')]: {
      width: '100%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '41.6%'
    },
  },
  UIGrid: {
    [theme.breakpoints.up('xs')]: {
      width: '100%'
    },
    [theme.breakpoints.up('sm')]: {
      width: '58.4%'
    },
    display: "flex",
    flexDirection: "column",
    overflow: "scroll",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "0.6rem",
  },
  formContainer: {
    margin: "auto",
    padding: "2rem",
    height: "100%",
    width: "63.4%"
  },
}));

const loginLink = {
  prompt: "Already have an account?",
  link: "/login",
  title: "Login",
};

const inputFields = [
  {
    'ariaLabel': 'username', 
    'label': 'Username',
    'name': 'username',
    'type': 'text',
    'passwordConfirm': false,

  }, 
  {
    'ariaLabel': 'e-mail address', 
    'label': 'E-mail address',
    'name': 'email',
    'type': 'email',
    'passwordConfirm': false,
  }, 
  {
    ariaLabel: "password",
    label: "Password",
    name: "password",
    type: "password",
    inputProps: { minLength: 6 },
    passwordConfirm: true,
  }, 
  {
    label:"Confirm Password",
    ariaLabel: "confirm password",
    type: "password",
    inputProps: { minLength: 6 },
    name: "confirmPassword",
    passwordConfirm: true,
  }, 
]

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

  const formFields= {
    submit: handleRegister,
    fields: inputFields,
    error: formErrorMessage,
    btnTitle: 'Create'
  }

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.overlayContainer}>
        <ChatOverlay />
      </Grid>
      <Grid className={classes.UIGrid}>
        <SwitchPage {...loginLink} />
        <Box className={classes.formContainer}>
          <Greeting greeting="Create an account." />
          <InputForm {...formFields} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
