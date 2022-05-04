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
    textAlign: 'center',
    justifyContent: 'center',
    background: `linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)`,
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.15,
    backgroundImage: `url('/assets/bg-img.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
  },
  text: {
    fontSize: '26px',
    lineHeight: '40px',
    marginTop: '1rem'
  },
  img: {
    width: '66px',
    height: '66px',
    margin: '1rem',
    marginTop: 0,
    zIndex: 1,
  },
  spacer: {
    height: '30%',
    width: '100%',
    margin: 'auto',
  },
  content: {
    height: '70%',
    width: '65%',
    margin: 'auto',
    color: 'white',
    textAlign: 'center',
    zIndex: 1,
  }
}));

const ChatOverlay = () => {
  const classes = useStyles();
  return (
    <Box className={classes.chatOverlay}>
      <Box className={classes.overlay}></Box>
      <Box className={classes.spacer}></Box>
      <Box className={classes.content}>
        <img alt='chat' src='/assets/bubble.svg' className={classes.img} />
        <Typography className={classes.text}>
          Converse with anyone with any language
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatOverlay;
