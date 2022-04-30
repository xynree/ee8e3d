import {
  Box,
  Typography,
} from '@material-ui/core';

const ChatOverlay = () => {

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
  }

  return (
    <Box sx={chatDisplayOverlay}>
    <img alt='chat' src='/assets/bubble.svg'/>
    <Typography>
      Converse with anyone with any language
    </Typography>
</Box>
  );
}

export default ChatOverlay;