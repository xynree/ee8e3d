import {
  Box,
  Typography,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chatOverlay: {  
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
    backgroundColor: theme.palette.primary.main,
    backgroundBlendMode: 'soft-light',
  }
}));

const ChatOverlay = () => {
  const classes = useStyles();
  return (
    <Box className={classes.chatOverlay}>
      <img alt='chat' src='/assets/bubble.svg'/>
      <Typography>
        Converse with anyone with any language
      </Typography>
    </Box>
)};

export default ChatOverlay;