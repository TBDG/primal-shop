import React from 'react';
import {MdSearch, GiHamburgerMenu, BiCart, GrFormClose} from "react-icons/all";
import logo from '../Z.png'


function Header() {
    // Variables used in the header
    const home = 'Home',
        categories = 'Categories',
        myAccount = 'My Account',
        faq = 'F.A.Q.',
        contact = 'Contact'

    // function to collapse the hamburger
    const showMenu = () => {
        var x = document.getElementById('mobile-nav')
        console.log(x, 'what is x')
        if (x.style.display === 'block') {
            x.style.display = 'none'
        } else {
            x.style.display = 'block'
        }
    }

    const showInput = () => {
        var x = document.getElementById('mobile-search-form')
        console.log(x, 'what is x')
        if (x.style.display === 'block') {
            x.style.display = 'none'
        } else {
            x.style.display = 'block'
        }
    }

    return (
        <div className="Header">
            <div className='mobile-header'>
                <div className='left-wrapper'>
                    <div className='hamburger-wrapper'>
                        <GiHamburgerMenu
                            className='hamburger'
                            onClick={showMenu}>
                        </GiHamburgerMenu>
                    </div>
                    <form className='mobile-search-form'>
                        <input className='mobile-search-field'
                               id='mobile-search-field'/>
                        <input type='submit' />
                        <button className='mobile-search-close'>
                            <GrFormClose></GrFormClose> </button>
                    </form>
                    <div className='mobile-logo'>
                        <a onClick={showMenu}>
                            <img src={logo} alt='logo' className='logo'/>
                        </a>
                    </div>
                    <MdSearch className='mobile-search'
                              onClick={showInput}></MdSearch>
                </div>
                <div className='right-wrapper'>
                    <BiCart className='mobile-cart'></BiCart>
                </div>
            </div>
            <div className='mobile-nav'
                 id='mobile-nav'>
                {home}
                {categories}
                {myAccount}
                {faq}
                {contact}
            </div>
        </div>
    );
}

export default Header;
