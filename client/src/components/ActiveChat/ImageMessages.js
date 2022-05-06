import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Box, Modal, Fade } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  imgs: {
    display: "flex",
    gap: "0.5rem",
    marginBottom: "0.5rem",
  },
  media: {
    height: 120,
  },
  modal: {
    position: "absolute",
    height: "85vh",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    outline: "none",
  },
}));

const ImageMessages = ({ imgs }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const classes = useStyles();
  return (
    <Box className={classes.imgs}>
      {imgs.map((img) => {
        return (
          <div key={img}>
            <Modal
              open={open}
              onClick={toggleOpen}
              onTouchStart={toggleOpen}
              className={classes.modalContainer}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Fade in={open}>
                <img src={img} className={classes.modal} />
              </Fade>
            </Modal>
            <Card
              elevation={3}
              onDoubleClick={toggleOpen}
              onTouchStart={toggleOpen}
            >
              <CardMedia
                component="img"
                image={img}
                className={classes.media}
              />
            </Card>
          </div>
        );
      })}
    </Box>
  );
};

export default ImageMessages;
