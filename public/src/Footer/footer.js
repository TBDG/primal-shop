import React from 'react';
import './_footer.scss';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';

let footerVars = {
    nav: [
        {
            name: 'Home',
            link: '#',
        },
        {
            name: 'Store',
            link: '#',
        },
        {
            name: 'F.A.Q.',
            link: '#',
        },
        {
            name: 'Our Facilities',
            link: '#'
        },
        {
            name: 'Contact Us',
            link: '#',
        },
        {
            name: 'Create Account',
            link: '#',
        },
        {
            name: 'Login',
            link: '#',
        },
    ],
    socialMedia: [
        '#',
        '#',
        '#',
        '#',
    ],
};

const Footer = () => {   
    let styles = {
        'font-size': 30,
        'margin-left': 5,
        'margin-right': 5,
        'margin-bottom': 5,
    };
    return (
        <div id='footer'>
            <p id='footer-nav'>
                <a href={footerVars.nav[0].link}>{footerVars.nav[0].name}</a> • 
                <a href={footerVars.nav[1].link}>{footerVars.nav[1].name}</a> • 
                <a href={footerVars.nav[2].link}>{footerVars.nav[2].name}</a> • 
                <a href={footerVars.nav[3].link}>{footerVars.nav[3].name}</a> • 
                <a href={footerVars.nav[4].link}>{footerVars.nav[4].name}</a>  • 
                <a href={footerVars.nav[5].link}>{footerVars.nav[5].name}</a> • 
                <a href={footerVars.nav[6].link}>{footerVars.nav[6].name}</a>
            </p>

            <div id='footer-line-break'/>

            <p id='social-media'>
                <a href={footerVars.socialMedia[0]} target="_blank"><AiOutlineFacebook style={styles}/></a>
                <a href={footerVars.socialMedia[1]} target="_blank"><AiOutlineTwitter style={styles}/></a>
                <a href={footerVars.socialMedia[2]} target="_blank"><AiOutlineInstagram style={styles}/></a>
                <a href={footerVars.socialMedia[3]} target="_blank"><AiOutlineYoutube style={styles}/></a>
            </p>
        </div>
    )
}

export default Footer;