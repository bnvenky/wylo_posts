import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';

const PostsDisplay = ({ onEdit }) => {
  const posts = useSelector(state => state.posts);

  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default PostsDisplay;
