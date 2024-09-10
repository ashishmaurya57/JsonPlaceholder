import React, { useState, useEffect } from 'react';
import './App.css'; // Import styles
import Modal from './Model';


const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="posts-list">
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} onClick={() => handlePostClick(post)}>
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
      {/* <Modal */}
      <Modal   post={selectedPost} onClose={handleCloseModal} />
    </div>
  );
};

export default PostsList;
