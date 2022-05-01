import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chatOverlay: {
    width: "100%",
    position: "relative",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.2,
    backgroundImage: `url('/assets/bg-img.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
  },
  text: {
    color: 'white',
    margin: '2rem',
    textAlign: 'center',
    fontSize: '1.5rem',
    width: '65%',
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
      <img alt="chat" src="/assets/bubble.svg" className={classes.img} />
      <Box alt="People conversing" className={classes.overlay}></Box>
      <Typography className={classes.text}>
        Converse with anyone with any language
      </Typography>
    </Box>
  );
};

export default ChatOverlay;
