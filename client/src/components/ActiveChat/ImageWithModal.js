import { Card, CardMedia, Modal, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
  media: {
    maxHeight: 120,
    minHeight: 80,
  },
  modal: {
    position: 'absolute',
    height: '85vh',
    minHeight: '85%',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: 'auto',
    outline: 'none',
  },
}));

const ImageModal = ({ img, length }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((open) => !open);

  return (
    <>
      <Modal
        open={open}
        onClick={toggleOpen}
        onTouchStart={toggleOpen}
        className={classes.modalContainer}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Fade in={open}>
          <img src={img} alt='Displayed in modal' className={classes.modal} />
        </Fade>
      </Modal>
      <Card elevation={3} onDoubleClick={toggleOpen} onTouchStart={toggleOpen}>
        <CardMedia
          component='img'
          image={img}
          className={classes.media}
          height={150 - length * 10}
        />
      </Card>
    </>
  );
};

export default ImageModal;
