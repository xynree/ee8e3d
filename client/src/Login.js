import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';

const Login = ({ user, login }) => {
  const history = useHistory();

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

  const chatDisplayOverlay = {
    width:'100%',
    position: 'relative',
    height:'100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    backgroundImage: `url('/assets/bg-img.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    bgcolor: 'primary.main',
    backgroundBlendMode: 'soft-light',
    '&::after': {
      content: '""',
      opacity: 0.7,
      top:0,
      left:0,
      bottom:0,
      right:0,
      position: 'absolute',
    }
  }


  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item xs={5}>
        <Box sx={chatDisplayOverlay}>
            <img alt='chat' src='/assets/bubble.svg'/>
            <Typography>
              Converse with anyone with any language
            </Typography>
        </Box>
      </Grid>
      <Grid item xs={7} direction="column" alignItems="center" justifyContent="center">
        <Box sx={{
          display: 'flex', flexDirection: 'column', 'width': '100%', 'height': '100vh', justifyContent: 'center', alignItems: 'center'
          }}>
          <Box sx={{display: 'flex', gap: '18px', width: '100%', height: '20%', boxSizing: 'border-box', padding: '48px', margin: 'auto', justifyContent: 'flex-end'}}>
            <Typography >Don't have an account?</Typography>
            <Link href="/register" to="/register">
              <Button color="secondary" variant="contained" size='large'>Create Account</Button>
            </Link>
          </Box>

        <Box sx={{margin: 'auto', padding: '36px', height: '60%'}}>
        <Typography>Welcome Back!</Typography>
        <form onSubmit={handleLogin}>
          <Grid item>
            <Grid>
              <FormControl margin="normal" required>
                <TextField
                  aria-label="username"
                  label="username"
                  name="username"
                  type="text"
                />
              </FormControl>
            </Grid>
            <FormControl margin="normal" required>
              <TextField
                label="password"
                aria-label="password"
                type="password"
                name="password"
              />
            </FormControl>
            <Grid>
              <Button color="primary" type="submit" variant="contained" size="large">
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
