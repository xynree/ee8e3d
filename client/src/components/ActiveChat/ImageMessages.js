import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import ImageWithModal from "./ImageWithModal";

const useStyles = makeStyles(() => ({
  imgs: {
    display: "flex",
    gap: "0.5rem",
    marginBottom: "0.5rem",
    marginTop: "0.25rem",
  },
}));

const ImageMessages = ({ imgs }) => {
  const classes = useStyles();

  return (
    <Box className={classes.imgs}>
      {imgs.map((img, i) => (
        <div key={img + i}>
          <ImageWithModal img={img} length={imgs.length} />
        </div>
      ))}
    </Box>
  );
};

export default ImageMessages;
