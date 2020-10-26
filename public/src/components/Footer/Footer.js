import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';

let styles = {
    'font-size': 30,
    'margin-left': 5,
    'margin-right': 5,
    'margin-bottom': 5,
    'color': '#ffffff',
};

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
            name: (<AiOutlineFacebook style={styles}/>),
            link: '#',
        },
        {
            name: (<AiOutlineTwitter style={styles}/>),
            link: '#',
        },
        {
            name: (<AiOutlineInstagram style={styles}/>),
            link: '#',
        },
        {
            name: (<AiOutlineYoutube style={styles}/>),
            link: '#',
        },
    ],
};

const Footer = () => {
    const itemMap = (arr, target) => {
        if (target) {
            return arr.map(e => <a href={e.link} target='_blank'>{e.name}</a>)
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
