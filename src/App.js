import React from 'react';
import './App.css';
import { IconContext } from 'react-icons';
import { CgProfile } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';
import { GoPlusSmall } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiArrowDropDownFill } from 'react-icons/ri';

function App() {
  return (
    <div className="layout">
      <nav className="header">
        <div class="container">
          <div className="nav-content">
            <IconContext.Provider value={{ color: 'white' }}>
              <FaGithub className="nav-item-hover-effect" size={42} />
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
            <a href="https://github.com/pulls" target="_blank" rel="noopener noreferrer">Pull requests</a>
            <a href="https://github.com/issues" target="_blank" rel="noopener noreferrer">Issues</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">Codespaces</a>
            <a href="https://github.com/marketplace" target="_blank" rel="noopener noreferrer">Marketplace</a>
            <a href="https://github.com/explore" target="_blank" rel="noopener noreferrer">Explore</a>
          </div>
          <div className="nav-profile">
            <div className="notification nav-profile-dropdown-button nav-item-hover-effect">
              <IconContext.Provider value={{ color: 'white' }}>
                <IoMdNotificationsOutline size={24} />
              </IconContext.Provider>  
            </div>
            
            <div className="nav-profile-dropdown-button nav-item-hover-effect">
              <IconContext.Provider value={{ color: 'white' }}>
                <GoPlusSmall size={24} />
              </IconContext.Provider>
              <IconContext.Provider value={{ color: 'white' }}>
                <RiArrowDropDownFill size={20} />
              </IconContext.Provider>
            </div>
            <div className="nav-profile-icons nav-profile-dropdown-button">
              <IconContext.Provider value={{ color: 'white' }}>
                <CgProfile size={24} />
              </IconContext.Provider>
              <IconContext.Provider value={{ color: 'white' }}>
                <RiArrowDropDownFill className="nav-item-hover-effect" size={20} />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </nav>
      <section className="profile-section">

      </section>
      <section className="content-section">
      
      </section>  
    </div>
  );
}

export default App;
