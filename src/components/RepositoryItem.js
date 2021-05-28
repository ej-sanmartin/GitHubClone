import React from 'react';
import { IconContext } from 'react-icons';
import { BiGitRepoForked } from 'react-icons/bi';
import { FiStar } from 'react-icons/fi';
import moment from 'moment';
import '../styles/RepositoryItem.css';

const RepositoryItem = (props) => {
    return (
        <article key={props && props.repo && props.repo.node && props.repo.node.id} className="repo">
            <div className="repo-header">
                <a href={props && props.repo && props.repo.node && props.repo.node.url} target="_blank" rel="noopener noreferrer"><h2>{props && props.repo && props.repo.node && props.repo.node.name}</h2></a>
                <a className="star-button">
                    <IconContext.Provider value={{ color: 'gray' }}>
                    <FiStar size={16} />
                    </IconContext.Provider>
                    <p>Star</p>
                </a>
            </div>
            <p className="repo-description">{props.repo && props.repo.node && props.repo.node.description}</p>
            <div className="repo-info">
                {props && props.repo && props.repo.node && props.repo.node.primaryLanguage ?
                    <div className="language-info">
                    <div className="language-circle" style={{ backgroundColor: `${props.repo.node.primaryLanguage.color}` }}></div>
                    <p>{props.repo.node.primaryLanguage.name}</p>
                    </div>
                    :
                    ``
                }
                <div className="star-info">
                    <IconContext.Provider value={{ color: 'gray' }}>
                        <FiStar size={18} />
                    </IconContext.Provider>
                    <p>{props && props.repo && props.repo.node && props.repo.node.stargazerCount}</p>
                </div>
                <div className="fork-info">
                    <IconContext.Provider value={{ color: 'gray' }}>
                        <BiGitRepoForked size={18} />
                    </IconContext.Provider>
                    <p>{props && props.repo && props.repo.node && props.repo.node.forkCount}</p>
                </div>
                <div className="updated-info">
                    <p>Updated on {moment(props && props.repo && props.repo.node && props.repo.node.updatedAt).format('MMMM Do, YYYY')}</p>
                </div>
            </div>
        </article>
    );
}

export default RepositoryItem;