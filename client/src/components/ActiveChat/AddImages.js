import { useRef } from 'react';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { makeStyles } from '@material-ui/core/styles';
import { Box , IconButton } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '0.8rem',
    position: 'absolute',
    width: '10%',
    right: '0.6rem',
    top: '0.6rem',
  },
  icon: {
    color: theme.palette.secondary.main,
  }
}));

const AddImages = ({images}) => {
  const inputRef = useRef(null);
  const [, setImgs] = images;
  const classes = useStyles();
  const handleClick = () => {
    inputRef.current.click();
    console.log('Image icon cliked.')
  }
  const handleChange = (e) => {

    const files = e.target.files

    Array.from(files).forEach((file) =>
      setImgs((prev) => [...prev, {file, url: URL.createObjectURL(file)}] )
    )

    // for sending FETCH
    
    // const form = new FormData();
    // form.append('file',  e.target.files[0])
    // form.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET)
    // form.append('api_key', process.env.REACT_APP_API_KEY)
    // form.append('folder', '/messenger')

    // fetch('process.env.REACT_APP_CLOUDINARY_URL', {
    //   method: "POST",
    //   body: form
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setSentImg(data.secure_url)
    //   });


  }
  return (
    <Box className={classes.iconsContainer}>
    <IconButton>
      <PhotoLibraryIcon onClick={handleClick} className={classes.icon}/></IconButton>
    <input
      ref={inputRef} 
      type="file" 
      accept="image/png, image/jpeg"
      multiple
      className={classes.input}
      onChange={handleChange}/>
    </Box>
  );
}

export default AddImages;