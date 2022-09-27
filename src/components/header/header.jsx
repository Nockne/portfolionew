import React from 'react';
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import Socials from './headerSocials'

const Header = () => {
    return (
        <header>
            <div className=".container header__container">
                <div className='.des_section'>
                    <h5>Hello I'm</h5>
                    <h1>Dillon Nguyen</h1>
                    <h5 className="text-light">Frontend Developer</h5>
                </div>
                <CTA />
                <Socials />
                <div className='me'>
                    <img src={ME} alt='me'></img>
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>

        </header>
    )
}

export default Header