import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const PostItem = ({ post, onEdit }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
        <IconButton onClick={() => onEdit(post)}>
          <EditIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default PostItem;
