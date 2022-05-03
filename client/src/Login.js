import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Box, FormControl, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ChatOverlay from "./components/LoginSignup/ChatOverlay";
import SwitchPage from "./components/LoginSignup/SwitchPage";
import Greeting from "./components/LoginSignup/Greeting";
import PrimaryButton from "./components/LoginSignup/PrimaryButton";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "100vh",
  },
  UIGrid: {
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
  },
  formControl: {
    width: "100%",
  },
  buttonControl: {
    margin: "auto",
  },
  input: {
    fontSize: theme.typography.fontSize,
  }
}));

const signupLink = {
  prompt: `Don't have an account?`,
  link: "/register",
  title: "Create Account",
};

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

  return (
    <Grid container className={classes.root}>
      <Grid item sm={5} xs={12} className={classes.chatOverlay}>
        <ChatOverlay />
      </Grid>
      <Grid item sm={7} xs={12} className={classes.UIGrid}>
        <SwitchPage {...signupLink} />
        <Box className={classes.formContainer}>
          <Greeting greeting="Welcome back!" />
          <form onSubmit={handleLogin}>
            <Grid container spacing={4} direction="column">
              <Grid item>
                <FormControl
                  margin="normal"
                  required
                  className={classes.formControl}
                >
                  <TextField
                    aria-label="username"
                    label="Username"
                    name="username"
                    type="text"
                    InputProps={{
                      classes: {
                        input: classes.input,
                      },
                    }}
                    InputLabelProps={{
                      classes: {
                        input: classes.input,
                      },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl
                  margin="normal"
                  required
                  className={classes.formControl}
                >
                  <TextField
                    label="Password"
                    aria-label="password"
                    type="password"
                    name="password"
                    InputProps={{
                      classes: {
                        input: classes.input,
                      },
                    }}
                    InputLabelProps={{
                      classes: {
                        input: classes.input,
                      },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item className={classes.buttonControl}>
                <PrimaryButton title="Login" />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
