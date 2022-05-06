import React, { useState } from 'react';
import { FormControl, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddImages from './AddImages';
import ImagePreview from './ImagePreview';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20, 
    padding: 0
  },
  input: {
    height: 70,
    width: '100%',
    padding: '1rem'
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage, postImgs }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [imgs, setImgs] = useState([]);
  
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const rmImg = (i) => {
    setImgs((prev) => [...prev].filter((img, index) => i !== index ))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.

    let urls;
    if (imgs.length) {
      urls = await Promise.all(postImgs(imgs));
    }
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      ...(urls && { attachments: urls})
    };
    await postMessage(reqBody);
    setText('');
    setImgs([]);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
        {imgs && <ImagePreview imgs={imgs} rmImg={rmImg} />}
        <FormControl fullWidth hiddenLabel>
          <InputBase
            classes={{ root: classes.input }}
            placeholder="Type something..."
            value={text}
            name="text"
            onChange={handleChange}
          />
          <AddImages setImgs={setImgs} />
        </FormControl>
    </form>
  );
};

export default Input;
