import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  chatOverlay: {
    position: 'relative',
    height: '100vh',
    minHeight: '100%',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.2,
    backgroundImage: `url('/assets/bg-img.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
  },
  text: {
    color: 'white',
    margin: '2rem',
    textAlign: 'center',
    fontSize: '1.8rem',
    width: '65%',
    zIndex: 1,
  },
  img: {
    width: '5rem',
    height: '5rem',
    margin: '1rem',
    marginTop: 0,
    zIndex: 1,
  }
}));

const ChatOverlay = () => {
  const classes = useStyles();
  return (
    <Box className={classes.chatOverlay}>
      <Box className={classes.overlay}></Box>
      <img alt='chat' src='/assets/bubble.svg' className={classes.img} />
      <Typography className={classes.text}>
        Converse with anyone with any language
      </Typography>
    </Box>
  );
};

export default ChatOverlay;
