import { useState, useRef } from 'react';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  }
}));

const AddImages = () => {
  const inputRef = useRef(null);
  const [sentImg, setSentImg] = useState(null);
  const classes = useStyles();
  const handleClick = () => {
    inputRef.current.click();
    console.log('Image icon cliked.')
    console.log(process.env.REACT_APP_UPLOAD_PRESET)

  }
  const handleChange = (e) => {
    const form = new FormData();
    form.append('file',  e.target.files[0])
    form.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET)
    form.append('api_key', process.env.REACT_APP_API_KEY)
    form.append('folder', '/messenger')

    fetch('https://api.cloudinary.com/v1_1/xynree/image/upload', {
      method: "POST",
      body: form
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSentImg(data.secure_url)
      });


  }
  return (
    <>
    <PhotoLibraryIcon onClick={handleClick}/>
    {sentImg? <img src={sentImg} width={100}/>: ''}
    <input 
      ref={inputRef} 
      type="file" 
      accept="image/png, image/jpeg"
      multiple
      className={classes.input}
      onChange={handleChange}/>
    </>
  );
}

export default AddImages;