import React from 'react';
import './_footer.scss';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';

let styles = {
    'font-size': 30,
    'margin-left': 5,
    'margin-right': 5,
    'margin-bottom': 5,
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
    const itemMap = (arr, target, icon) => {
        if (target) {
            return arr.map(i => <a href={i.link} target='_blank'>{i.name}</a>)
        }
        return arr.map(i => <a href={i.link}> • {i.name}</a>)
    }

    return (
        <div id='footer'>
            <p id='footer-nav'>
                {itemMap(footerVars.nav)}
            </p>

            <div id='footer-line-break'/>

            <p id='social-media'>
                {itemMap(footerVars.socialMedia, true, true)}
            </p>
        </div>
    )
}

export default Footer;
