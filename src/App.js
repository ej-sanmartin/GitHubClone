import React, { useState } from 'react';
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
import moment from 'moment';
import Footer from './components/Footer'
import  { Query } from 'react-apollo';
import { LOAD_USER } from './GraphQL/Queries';

function App() {
  const [searchedUser, setSearchedUser] = useState("");
  const [successfullySearchUser, setSuccessfullySearchedUser] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [user, setUser] = useState([]);
  const [repositories, setRepositories] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
  };

  return (
    <div className="layout">
      <nav className="header">
        <div className="container">
          <div className="nav-content">
            <IconContext.Provider value={{ color: 'white' }}>
              <FaGithub className="nav-item-hover-effect" size={42} />
            </IconContext.Provider>
            <form className="search-form" onSubmit={e => {handleSubmit(e)}}>
              <input
                  className="search-form-input"
                  type="text"
                  id="search"
                  name="search"
                  onChange={e => setSearchedUser(e.target.value)}
                  placeholder="Search or jump to..."
              />
                  <Query query={LOAD_USER} skip={!submitting} variables={{ user: searchedUser }}>
                  {({loading, error, data}) => {
                    if(loading) return null;
                    if(error) throw error;
                    if(data && !loading){
                      setUser(data.search.edges[0].node);
                      setRepositories(data.search.edges[0].node.repositories);
                      setSuccessfullySearchedUser(searchedUser);
                      setSubmitting(false);
                    }
                    return null;
                    }}
                  </Query>
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
              {user && user.avatarUrl ?
                <img
                  src={user.avatarUrl}
                  alt={`${user.name}'s Profile Pic`}
                  className="mini-profile-pic"
                />
              :
                <IconContext.Provider value={{ color: 'white' }}>
                  <CgProfile size={24} />
                </IconContext.Provider>
              }
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
            {user && user.avatarUrl ?
              <img className="profile-image"
                   src={user.avatarUrl}
                   alt={`${user.name}'s Profile Pic`}
                   className="profile-pic"
              />
            :
              <IconContext.Provider className="profile-image" value={{ color: '#cacaca' }}>
                <CgProfile size={256} />
              </IconContext.Provider>
            }
            <div className="happy-face">
              <GrEmoji size={16} />
            </div>
          </div>
          <h2>{user && user.name ? user.name : ``}</h2>
          <h3>{successfullySearchUser ? successfullySearchUser : ``}</h3>
          <p>{user ? user.bio : ``}</p>
        </div>
      </section>
      <section className="content-section">
        <div className="content-section-links">
          <div className="content-section-links-row">
            <a href="#repo" className="content-link">
              <IconContext.Provider value={{ color: '#aaa' }}>
                <BiBookOpen size={20} />
              </IconContext.Provider>
              <p>Overview</p>
            </a>
            <a href="#repo" className="content-link">
              <IconContext.Provider value={{ color: '#aaa' }}>
                <FiBook size={20} />
              </IconContext.Provider>
              <p>Repositories</p>
              <p className="repo-count">{repositories && repositories.totalCount ? repositories.totalCount : `0`}</p>
            </a>
            <a href="#repo" className="content-link">
              <IconContext.Provider value={{ color: '#aaa', className: 'bar-chart-icon' }}>
                <BiBarChartSquare rotate={120} size={20} />
              </IconContext.Provider>
              <p>Projects</p>
            </a>
            <a href="#repo" className="content-link">
              <IconContext.Provider value={{ color: '#aaa' }}>
                <IoCubeOutline size={20} />
              </IconContext.Provider>
              <p>Packages</p>
            </a>
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
        <p className="results-message"><span className="bold-style">{repositories && repositories.totalCount ? repositories.totalCount : `0`}</span> results for <span className="bold-style">public</span> repositories</p>
        {repositories && repositories.edges  ? repositories.edges.map((repo) => {
          return (
            <article key={repo && repo.node && repo.node.id} className="repo">
              <div className="repo-header">
                <a href={repo && repo.node && repo.node.url} target="_blank" rel="noopener noreferrer"><h2>{repo && repo.node && repo.node.name}</h2></a>
                <a className="star-button">
                  <IconContext.Provider value={{ color: 'gray' }}>
                    <FiStar size={16} />
                  </IconContext.Provider>
                  <p>Star</p>
                </a>
              </div>
              <p className="repo-description">{repo && repo.node && repo.node.description}</p>
              <div className="repo-info">
                {repo && repo.node && repo.node.primaryLanguage ?
                  <div className="language-info">
                    <div className="language-circle" style={{ backgroundColor: `${repo.node.primaryLanguage.color}` }}></div>
                    <p>{repo.node.primaryLanguage.name}</p>
                  </div>
                :
                  ``}
                <div className="star-info">
                  <IconContext.Provider value={{ color: 'gray' }}>
                    <FiStar size={18} />
                  </IconContext.Provider>
                  <p>{repo && repo.node && repo.node.stargazerCount}</p>
                </div>
                <div className="fork-info">
                  <IconContext.Provider value={{ color: 'gray' }}>
                    <BiGitRepoForked size={18} />
                  </IconContext.Provider>
                  <p>{repo && repo.node && repo.node.forkCount}</p>
                </div>
                <div className="updated-info">
                  <p>Updated on {moment(repo && repo.node &&repo.node.updatedAt).format('MMMM Do, YYYY')}</p>
                </div>
              </div>
            </article>
          );
        })
        :
        <article className="awaiting-section">
          <div className="welcoming-smile">
            <GrEmoji size={60} />
          </div>
          <p className="awaiting-message">Submit your Github username to display your info in this space</p>
          <small className="small-message">This site is NOT affiliated with Github</small>
        </article>
        }

      </section>
      <Footer style="footer" />
    </div>
  );
}

export default App;
