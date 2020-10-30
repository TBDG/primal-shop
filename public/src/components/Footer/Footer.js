import React from 'react';
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
            name: 'Create Account',
            link: '#',
        },
        {
            name: 'Login',
            link: '#',
        },
    ],
    socialMedia: [
        {
            name: (<AiOutlineFacebook className="footer-icon"/>),
            link: '#',
        },
        {
            name: (<AiOutlineTwitter className="footer-icon"/>),
            link: '#',
        },
        {
            name: (<AiOutlineInstagram className="footer-icon"/>),
            link: '#',
        },
        {
            name: (<AiOutlineYoutube className="footer-icon"/>),
            link: '#',
        },
    ],
};

const Footer = () => {
    const itemMap = (arr, target) => {
        if (target) {
            return arr.map(e => <a href={e.link} rel="noopener noreferrer" target='_blank'>{e.name}</a>)
        }
        return arr.map((e, i) => {
            if (i === 0) {
                return <a href={e.link}>{e.name}</a>;
            } else { return <a href={e.link}> • {e.name}</a>};
        })
    }

    return (
        <div id='footer'>
            <p id='footer-nav'>
                {itemMap(footerVars.nav)}
            </p>
            <p id='contact-us'>
                {itemMap([{name: 'Contact Us', link: '#',}])}
            </p>

            <div id='footer-line-break'/>

            <div id='social-media'>
                {itemMap(footerVars.socialMedia, true)}
            </div>
        </div>
    )
}

export default Footer;
