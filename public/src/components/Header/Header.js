import React, {useState} from 'react';
import {MdSearch, GiHamburgerMenu, BiCart, GrFormClose, FaPhoneAlt, MdEmail, MdPerson} from "react-icons/all";
import logo from '../../Z.png'
import {getContent} from "../../content";


function Header() {
    const [search, setSearch] = useState("")
    // Variables used in the header
    const {header} = getContent();

    // function to display/collapse the hamburger menu
    const showMenu = () => {
        var x = document.getElementById('mobile-nav')
        if (x.style.display === 'block') {
            x.style.display = 'none'
        } else {
            x.style.display = 'block'
        }
    }

    //function to display/collapse the search input
    const showInput = () => {
        var x = document.getElementById('mobile-search-form')
        if (x.style.display === 'block') {
            x.style.display = 'none'
        } else {
            x.style.display = 'block'
        }
    }

    //search function
    const doSearch = (e) => {
        e.preventDefault()
        console.log(search)
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
                    <div className='mobile-logo'>
                        <a onClick={showMenu}>
                            <img src={logo}
                                 alt='logo'
                                 className='logo'/>
                        </a>
                    </div>
                    <form className='mobile-search-form'
                          id='mobile-search-form'
                          onSubmit={doSearch}>
                        <input className='mobile-search-field'
                               value={search}
                               onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className='mobile-search-submit'
                                type='submit'><MdSearch></MdSearch></button>
                        <button className='mobile-search-close'
                                onClick={showInput}>
                            <GrFormClose></GrFormClose></button>
                    </form>
                    <MdSearch className='mobile-search'
                              onClick={showInput}></MdSearch>
                </div>
                <div className='right-wrapper'>
                    <BiCart className='mobile-cart'></BiCart>
                </div>
            </div>
            <div className='mobile-nav'
                 id='mobile-nav'>
                {header.home}
                {header.categories}
                {header.myAccount}
                {header.faq}
                {header.contact}
            </div>
            <div className='desktop-header'>
                <div className='container'>
                    <div className='row v-align'>
                        <div className='logo col-3'>
                            <img src={logo}/>
                        </div>
                        <div className='info-and-nav col-9'>
                            <div className='row'>
                                <div className='v-align col-12'>
                                    <span><MdEmail/> {header.email}</span>
                                    <span><FaPhoneAlt/> {header.phone}</span>
                                    <span><MdPerson/> {header.myAccount}</span>
                                    |<span><BiCart/></span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='v-align col-12'>
                                    <div className='desktop-nav'>
                                        <ul>
                                        <li><a>{header.home} </a></li>
                                        <li><a>{header.categories} </a></li>
                                        <li><a>{header.myAccount} </a></li>
                                        <li><a>{header.faq} </a></li>
                                        <li><a>{header.contact} </a></li>
                                        <li>
                                            <form className='desktop-search-form'
                                              onSubmit={doSearch}>
                                            <input className='desktop-search-field'
                                                   value={search}
                                                   onChange={(e) => setSearch(e.target.value)}
                                            />
                                            <button className='mobile-search-submit'
                                                    type='submit'><MdSearch/></button>
                                            </form>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
