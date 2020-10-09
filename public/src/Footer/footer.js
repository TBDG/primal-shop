import React from 'react';
import './_footer.scss';

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
    return (
        <div id='footer'>
            <ul id='footer-nav'>
                <li><a href={footerVars.nav[0].link}>{footerVars.nav[0].name}</a></li>
                <li><a href={footerVars.nav[1].link}>{footerVars.nav[1].name}</a></li>
                <li><a href={footerVars.nav[2].link}>{footerVars.nav[2].name}</a></li>
                <li><a href={footerVars.nav[3].link}>{footerVars.nav[3].name}</a></li>
                <li><a href={footerVars.nav[4].link}>{footerVars.nav[4].name}</a></li>
                <li><a href={footerVars.nav[5].link}>{footerVars.nav[5].name}</a></li>
                <li><a href={footerVars.nav[6].link}>{footerVars.nav[6].name}</a></li>
            </ul>

            <div id='footer-line-break'/>

            <ul id='social-media'>
                <li><a href={footerVars.socialMedia[0]} target="_blank">FaceBook</a></li>
                <li><a href={footerVars.socialMedia[1]} target="_blank">Twitter</a></li>
                <li><a href={footerVars.socialMedia[2]} target="_blank">Instagram</a></li>
                <li><a href={footerVars.socialMedia[3]} target="_blank">Youtube</a></li>
            </ul>
        </div>
    )
}

export default Footer;