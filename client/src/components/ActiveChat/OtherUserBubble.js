import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';
import ImageMessages from './ImageMessages';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bubble: {
    backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
    borderRadius: '0 10px 10px 10px',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
    padding: 8,
  },
}));

const OtherUserBubble = ({ text, time, otherUser, imgs }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        {(imgs || text) && <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>}
        {(imgs && imgs.length === 1) && <ImageMessages imgs={imgs} />}
        <Box className={classes.bubble}>
          {text && <Typography className={classes.text}>{text}</Typography>}
        </Box>
        {(imgs && imgs.length > 1) && <ImageMessages imgs={imgs} />}
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
