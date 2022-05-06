import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardMedia, IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
  previewContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  cardContainer: {
    display: 'flex',
    position: 'relative',
    alignContent: 'flex-end',
    padding: '0.5rem',
    paddingRight: '0.25rem',
    flexDirection: 'column',
  },
  badge: {
    position: 'absolute',
    top: '0.5rem',
    right: '0.25rem',
    width: '30px',
    height: '30px',
    zIndex: 1,
  },
  deleteIcon: {
    color: theme.palette.secondary.background,
  },
  media: {
    objectFit: 'cover',
  },
}));

const ImagePreview = ({ imgs, rmImg }) => {
  const classes = useStyles();

  return (
    <Box className={classes.previewContainer}>
      {imgs.length
        ? imgs.map(({ url }, i) => (
            <Box className={classes.cardContainer} key={url + i}>
              <Card elevation={3}>
                <IconButton className={classes.badge} onClick={() => rmImg(i)}>
                  <HighlightOffIcon className={classes.deleteIcon} />
                </IconButton>
                <CardMedia
                  component='img'
                  height='120'
                  alt='Preview for Attached Image'
                  image={url}
                  className={classes.media}
                />
              </Card>
            </Box>
          ))
        : ''}
    </Box>
  );
};

export default ImagePreview;
