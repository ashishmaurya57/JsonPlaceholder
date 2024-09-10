import React from 'react';

import './App.css'; // Import your styles
import PostsList from './PostList';

const App = () => {
  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <PostsList/>
      <button className="scroll-down-btn" onClick={scrollDown}>
        Scroll Down
      </button>
    </div>
  );
};

export default App;
