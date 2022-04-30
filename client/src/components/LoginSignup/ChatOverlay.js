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
    backgroundImage: `url('/assets/bg-img.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundColor: theme.palette.primary.main,
    backgroundBlendMode: "soft-light",
  },
  text: {
    color: 'white',
    margin: '2rem',
    textAlign: 'center',
    fontSize: '2.2rem',
    width: '65%',
  },
  img: {
    width: '6rem',
    height: '6rem',
    margin: '2rem',
  }
}));

const ChatOverlay = () => {
  const classes = useStyles();
  return (
    <Box className={classes.chatOverlay}>
      <img alt="chat" src="/assets/bubble.svg" className={classes.img} />
      <Typography className={classes.text}>
        Converse with anyone with any language
      </Typography>
    </Box>
  );
};

export default ChatOverlay;
