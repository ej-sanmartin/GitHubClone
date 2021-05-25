import React from 'react';
import './App.css';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className="layout">
      <nav className="header">
        <div className="nav-content">
          <IconContext.Provider value={{ color: 'white' }}>
            <FaGithub size={42} />
          </IconContext.Provider>
          <form className="search-form">
            <input
                className="search-form-input"
                type="text"
                id="search"
                name="search"
                placeholder="Search or jump to..."
            />
          </form>
          <a href="https://github.com/pulls" target="_blank">Pull requests</a>
          <a href="https://github.com/issues" target="_blank">Issues</a>
          <a href="https://github.com" target="_blank">Codespaces</a>
          <a href="https://github.com/marketplace" target="_blank">Marketplace</a>
          <a href="https://github.com/explore" target="_blank">Explore</a>
        </div>
        <div className="nav-profile">

        </div>
      </nav>
      
    </div>
  );
}

export default App;
