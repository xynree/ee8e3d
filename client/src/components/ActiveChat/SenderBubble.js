import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import ImageMessages from './ImageMessages';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
    marginBottom: 5,
  },
}));

const SenderBubble = ({ time, text, imgs }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {(imgs || text) && <Typography className={classes.date}>{time}</Typography>}
      {(imgs && imgs.length === 1) && <ImageMessages imgs={imgs} />}
      <Box className={classes.bubble}>
        {text && <Typography className={classes.text}>{text}</Typography>}
      </Box>
      {(imgs && imgs.length > 1) && <ImageMessages imgs={imgs} />}
    </Box>
  );
};

export default SenderBubble;
