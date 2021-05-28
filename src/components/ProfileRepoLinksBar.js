import React from 'react';
import { IconContext } from 'react-icons';
import { BiBookOpen, BiBarChartSquare } from 'react-icons/bi';
import { FiBook } from 'react-icons/fi';
import { IoCubeOutline } from 'react-icons/io5'

const ProfileRepoLinksBar = (props) => {
    return (
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
            <p className="repo-count">{props && props.repo && props.repo.totalCount ? props.repo.totalCount : `0`}</p>
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
    );
}

export default ProfileRepoLinksBar;