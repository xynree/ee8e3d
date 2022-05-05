import { makeStyles } from '@material-ui/core/styles';
import { Box , Card, CardMedia, IconButton } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


const useStyles = makeStyles((theme) => ({
  previewContainer: {
     display: 'flex',
     gap: '0.25rem',
     flexWrap: 'wrap',
  },
  cardContainer: {
    display:'flex',
    position: 'relative',
    alignContent: 'flex-end',
    padding: '0.5rem',
    flexDirection: 'column',
  },
  media: {
    objectFit: 'cover',
  },
  delete: {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    width: '30px',
    height: '30px',
    zIndex: 1,

  },
  icon: {
    zIndex: 1,
    color: theme.palette.secondary.background
  }
}));

const ImagePreview = ({images, rmImg}) => {
  const classes = useStyles()
  const [imgs,] = images;
  console.log(imgs)

  return (
    <Box className={classes.previewContainer}>
    {imgs.length? 
      imgs.map(({url},i) => 
      <Box className={classes.cardContainer} key={url+i}>
      <Card elevation={3} >
      <IconButton size="medium" color="secondary" className={classes.delete} onClick={() => rmImg(i)} >
        <HighlightOffIcon className={classes.icon} />
      </IconButton>
          <CardMedia
              component="img"
              height="120"
              alt="preview"
              image={url}
              className={classes.media}/>
        </Card>
        </Box>
      )
      : ''}
    </Box>
  );
}

export default ImagePreview;