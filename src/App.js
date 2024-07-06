import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import CreatePost from './components/CreatePost';
import PostsDisplay from './components/PostsDisplay';

const App = () => {
  const [postToEdit, setPostToEdit] = useState(null);

  const handleEdit = (post) => {
    setPostToEdit(post);
  };

  const clearEdit = () => {
    setPostToEdit(null);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="div" gutterBottom>
        WYLO Posts
      </Typography>
      <CreatePost postToEdit={postToEdit} clearEdit={clearEdit} />
      <PostsDisplay onEdit={handleEdit} />
    </Container>
  );
};

export default App;
