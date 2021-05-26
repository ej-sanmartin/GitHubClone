import React from 'react';
import './App.css';
import { IconContext } from 'react-icons';
import { BiBookOpen, BiBarChartSquare, BiGitRepoForked } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';
import { FiBook, FiStar } from 'react-icons/fi';
import { GoPlusSmall } from 'react-icons/go';
import { GrEmoji } from 'react-icons/gr';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoCubeOutline } from 'react-icons/io5'
import { RiArrowDropDownFill } from 'react-icons/ri';

function App() {
  return (
    <div className="layout">
      <nav className="header">
        <div className="container">
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
        <div className="profile-card">
          <div className="profile-image">
            <IconContext.Provider className="profile-image" value={{ color: '#cacaca' }}>
              <CgProfile size={256} />
            </IconContext.Provider>
            <div className="happy-face">
              <GrEmoji size={16} />
            </div>
          </div>
          <h2>Name</h2>
          <h3>Username</h3>
          <p>Bio</p>
        </div>
      </section>
      <section className="content-section">
        <div className="content-section-links">
          <div className="content-section-links-row">
            <div className="content-link">
              <IconContext.Provider value={{ color: '#cacaca' }}>
                <BiBookOpen size={24} />
              </IconContext.Provider>
              <p>Overview</p>
            </div>
            <div className="content-link">
              <IconContext.Provider value={{ color: '#cacaca' }}>
                <FiBook size={24} />
              </IconContext.Provider>
              <p>Repositories</p>
              <p>160</p>
            </div>
            <div className="content-link">
              <IconContext.Provider value={{ color: '#cacaca', className: 'bar-chart-icon' }}>
                <BiBarChartSquare rotate={120} size={24} />
              </IconContext.Provider>
              <p>Projects</p>
            </div>
            <div className="content-link">
              <IconContext.Provider value={{ color: '#cacaca' }}>
                <IoCubeOutline size={24} />
              </IconContext.Provider>
              <p>Overview</p>
            </div>
          </div>
          <hr className="horizontal-line-full-page" />
        </div>
        <form className="search-repository-form">
          <input
            className="search-repository-input"
            type="text"
            placeholder="Find a repository..."
          />
        </form>
        <hr className="hr-line-under-form" />
        <p className="results-message"><span>124</span> results for <span>public</span> repositories</p>
        <hr className="hr-line-under-result-message" />
        <article className="repo">
          <div className="repo-header">
            <a href="#"><h2>Repo-address</h2></a>
            <a className="star-button">
              <IconContext.Provider value={{ color: 'gray' }}>
                <FiStar size={24} />
              </IconContext.Provider>
              <p>Star</p>
            </a>
          </div>
          <p className="repo-description">Lorem-ipsum</p>
          <div className="repo-info">
            <div className="language-info">
              <p>Language</p>
            </div>
            <div className="star-info">
              <IconContext.Provider value={{ color: 'gray' }}>
                <FiStar size={24} />
              </IconContext.Provider>
              <p>20</p>
            </div>
            <div className="fork-info">
              <IconContext.Provider value={{ color: 'gray' }}>
                <BiGitRepoForked size={24} />
              </IconContext.Provider>
              <p>4</p>
            </div>
            <div className="updated-info">
              <p>Updated on June 12th</p>
            </div>
          </div>
        </article>
      </section>
      <footer>
        <a>© 2021 Github, Inc.</a>
        <a href="https://docs.github.com/en/github/site-policy/github-terms-of-service" target="_blank" rel="noopener noreferrer">Terms</a>
        <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" target="_blank" rel="noopener noreferrer">Privacy</a>
        <a href="https://github.com/security" target="_blank" rel="noopener noreferrer">Security</a>
        <a href="https://www.githubstatus.com/" target="_blank" rel="noopener noreferrer">Status</a>
        <a href="https://docs.github.com/" target="_blank" rel="noopener noreferrer">Docs</a>
        <div></div>
        <a href="https://github.com/">
          <IconContext.Provider href="https://github.com/" value={{ color: 'gray' }}>
            <FaGithub className="nav-item-hover-effect" size={28} />
          </IconContext.Provider>
        </a>
        <div></div>
        <a href="https://support.github.com/" target="_blank" rel="noopener noreferrer">Contact Github</a>
        <a href="https://github.com/pricing" target="_blank" rel="noopener noreferrer">Pricing</a>
        <a href="https://docs.github.com/" target="_blank" rel="noopener noreferrer">API</a>
        <a href="https://services.github.com/" target="_blank" rel="noopener noreferrer">Training</a>
        <a href="https://github.blog/" target="_blank" rel="noopener noreferrer">Blog</a>
        <a href="https://github.com/about" target="_blank" rel="noopener noreferrer">About</a>
      </footer>
    </div>
  );
}

export default App;
