import { useRef, useState } from 'react';
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

const AddImages = ({setImgs}) => {
  const inputRef = useRef(null);
  const [files, setFiles] = useState('')
  const classes = useStyles();
  const handleClick = (e) => {
    inputRef.current.click();
  }
  const handleChange = (e) => {
    Array.from(e.target.files).forEach((file) =>
      setImgs((prev) => [...prev, {file, url: URL.createObjectURL(file)}] )
    )
    setFiles('');
  }
  return (
    <Box className={classes.iconsContainer}>
    <IconButton onClick={handleClick}>
      <PhotoLibraryIcon  className={classes.icon}/>
      </IconButton>
    <input
      ref={inputRef} 
      type='file' 
      accept='image/png, image/jpeg'
      multiple
      value={files}
      className={classes.input}
      onChange={handleChange}/>
    </Box>
  );
}

export default AddImages;