import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  imgs: {
    display: "flex",
    gap: "1rem",
    marginBottom: "0.5rem",
  },
  media: {
    height: 120,
  },
}));

const ImageMessages = ({imgs}) => {
  const classes = useStyles();
  return (
    <Box className={classes.imgs}>
      {imgs.map((img) => {
        return (
          <Card elevation={3} key={img}>
            <CardMedia component="img" image={img} className={classes.media} />
          </Card>
        );
      })}
    </Box>
  );
};

export default ImageMessages;
