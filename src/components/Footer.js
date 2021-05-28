import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = ({ style }) => {
    // keeps copyright year current forever
    let today = new Date();
    let year = today.getFullYear();

    return (
        <footer className={style}>
            <a className="copyright">© {year} Github, Inc.</a>
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
    );
}

export default Footer;