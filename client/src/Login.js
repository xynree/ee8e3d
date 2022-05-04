import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Box} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChatOverlay from "./components/LoginSignup/ChatOverlay";
import SwitchPage from "./components/LoginSignup/SwitchPage";
import Greeting from "./components/LoginSignup/Greeting";
import InputForm from "./components/LoginSignup/InputForm"
import { signupLink, inputFields } from "./data/LoginData"

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
    width: "63.4%",
  }
}));

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
    if (user && user.id) history.push("/home");
  }, [user, history]);

  const formFields= {
    submit: handleLogin,
    fields: inputFields,
    error: null,
    btnTitle: 'Login'
  };

  return (
    <Grid container className={classes.root}>
      <Grid className={classes.overlayContainer}>
        <ChatOverlay />
      </Grid>
      <Grid item className={classes.UIGrid}>
        <SwitchPage {...signupLink} />
        <Box className={classes.formContainer}>
          <Greeting greeting="Welcome back!" />
          <InputForm {...formFields}/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
