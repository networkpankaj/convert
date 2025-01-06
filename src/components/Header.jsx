// src/components/Header.js
import React from 'react';
import img from '../assets/image/logo.webp'
function Header() {
    return (
        <header className="section mod--header">
            <div className="content">
                <div className="header__columns">
                    <div className="header__col">
                        <a href="#" className="header__logo-link w-inline-block">
                            <img src={img} alt="Company Logo" className="logo" />
                        </a>
                    </div>
                    <div className="header__col mod--3">
                        <a href="#" className="btn btn--header w-inline-block">
                            <div className="btn__txt">Contact Us</div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;