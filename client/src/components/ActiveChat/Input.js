import React, { useState } from 'react';
import { FormControl, FilledInput, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';import MoodIcon from '@material-ui/icons/Mood';

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    width: '100%',
    backgroundColor: '#F4F6FA',    
    borderRadius: 8,
    marginBottom: 20,
  },
  icons: {
    color: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '0.8rem',
    position: 'absolute',
    width: '100%',
    right: '1rem',
    top: '25%',
  }
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
    };
    await postMessage(reqBody);
    setText('');
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>

        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
        />
        <Box className={classes.icons} >
          <MoodIcon className={classes.emojiIcon} />
          <PhotoLibraryIcon className={classes.addImageIcon}/>
        </Box>  
      </FormControl>
    </form>
  );
};

export default Input;
