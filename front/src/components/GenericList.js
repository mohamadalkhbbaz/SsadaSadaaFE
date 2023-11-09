import React from 'react';
import useGeneric from '../services/useGeneric';

const GenericList = () => {
  const { data, isLoading, error } = useGeneric('posts');

  if (isLoading)  
    return <div>Loading...</div>;
  if (error)  
    return <div>Error: {error.message}</div>;

  return (
    <>
    <h2>PostsList_0</h2>
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.id}</li>
      ))}
    </ul>
    </>
  );
};

export default GenericList;
