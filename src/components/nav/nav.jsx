import React from 'react';
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BsListCheck} from 'react-icons/bs'
import {TiContacts} from 'react-icons/ti'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('')
    return (
        <div className='.container__nav'>
            <nav>
                <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
                <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/></a>
                <a href='#experience'onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsListCheck/></a>
                <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiContacts/></a>
            </nav>
        </div>
    )
}

export default Nav