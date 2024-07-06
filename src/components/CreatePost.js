import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, updatePost } from '../redux/postSlice';
import { TextField, Button, Box } from '@mui/material';

const CreatePost = ({ postToEdit, clearEdit }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
    }
  }, [postToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postToEdit) {
      dispatch(updatePost({ ...postToEdit, title, content }));
      clearEdit();
    } else {
      dispatch(addPost({ id: Date.now(), title, content }));
    }
    setTitle('');
    setContent('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 4 }}
    >
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained">
        {postToEdit ? 'Update Post' : 'Create Post'}
      </Button>
    </Box>
  );
};

export default CreatePost;
