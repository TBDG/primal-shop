import React from 'react';


function Header() {
    // Variables used in the header
    const logo = 'Logo'

    // function to collapse the hamburger
    const showMenu = () => {
        var x = document.getElementById('mobile-links')
        console.log(x, 'what is x')
        if (x.style.display === 'block') {
            x.style.display = 'none'
        } else {
            x.style.display = 'block'
        }
    }

    return (
        <div className="Header">
            <div className='mobile-header'> Header spacek;lajsd.lfkj;pasldkjf
                <div className='hamburger'>
                    <div className='mobile-nav'>

                    </div>
                </div>
                <div className='mobile-logo'>{logo}</div>
                <div className='mobile-search'></div>
                <div className='mobile-cart'></div>
            </div>

        </div>
    );
}

export default Header;
