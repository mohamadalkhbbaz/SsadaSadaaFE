import React from 'react';
import usePosts from '../services/usePosts';

const PostList = () => {
  const { data, isLoading, error } = usePosts('posts');

  if (isLoading)  
    return <div>Loading...</div>;
  if (error)  
    return <div>Error: {error.message}</div>;

  return (
    <>
    <h2>Posts</h2>
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
    </>
  );
};

export default PostList;
