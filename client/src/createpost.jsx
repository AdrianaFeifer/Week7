// client/src/components/CreatePost.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreatePost = () => {
  const [message, setMessage] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/user-forum-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, categoryId, username }),
      });

      const data = await response.json();
      console.log('New user forum post created:', data);

      
      setMessage('');
      setCategoryId('');
      setUsername('');

      
      history.push('/forum');
    } catch (error) {
      console.error('Error creating user forum post:', error);
    }
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        {}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
