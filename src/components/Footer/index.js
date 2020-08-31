import React from 'react';
import './Footer.css';
import LinkedInIcon from '../Icons/LinkedInIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import GithubIcon from '../Icons/GithubIcon';


const Footer = () => {
    return(
        <footer className="page-footer fixed-bottom text-center">
            &copy; 2020 Matthias Stadtler
            <LinkedInIcon />
            <GithubIcon />
            <TwitterIcon />
        </footer>
    );
}

export default Footer;