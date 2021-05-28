import React, { useState } from 'react';
import './App.css';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { GoPlusSmall } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiArrowDropDownFill } from 'react-icons/ri';
import MiniProfileImageItem from './components/MiniProfileImageItem';
import ProfileCard from './components/ProfileCard';
import ProfileRepoLinksBar from './components/ProfileRepoLinksBar';
import RepositoryItem from './components/RepositoryItem';
import AwaitingResponse from './components/AwaitingResponse';
import Footer from './components/Footer';
import  { Query } from 'react-apollo';
import { LOAD_USER } from './GraphQL/Queries';

function App() {
  const [searchedUser, setSearchedUser] = useState("");
  const [successfullySearchedUser, setSuccessfullySearchedUser] = useState("");
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
              <MiniProfileImageItem  user={user} />
              <IconContext.Provider value={{ color: 'white' }}>
                <RiArrowDropDownFill className="nav-item-hover-effect" size={20} />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </nav>
      <section className="profile-section">
        <ProfileCard username={successfullySearchedUser} user={user} />
      </section>
      <section className="content-section">
        <div className="content-section-links">
          <ProfileRepoLinksBar repo={repositories}/>
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
          return <RepositoryItem key={repo && repo.node && repo.node.id} repo={repo} />
        })
        :
          <AwaitingResponse />
        }
      </section>
      <Footer style="footer" />
    </div>
  );
}

export default App;