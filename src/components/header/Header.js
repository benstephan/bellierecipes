import React, { Component } from 'react';
import {ReactComponent as ReactLogo} from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSlidersH, faSearch } from '@fortawesome/free-solid-svg-icons';

import './header.css';

export class Header extends Component {
    render() {  
        const username = localStorage.getItem('name');
        const displaySearch = () => {
            const searchBox = document.querySelector('.search-form');
            searchBox.classList.add('show');
        }
        return (
            <div className="main-header">
                <div className="main-header__logo">
                    <a href="/"><ReactLogo /></a>
                </div>
                <div className="main-header__navigation">
                    <nav>
                        <button id="search-button" onClick={displaySearch}><FontAwesomeIcon icon={faSearch} /></button>
                        <button><FontAwesomeIcon icon={faSlidersH} /></button>
                        <button><a href="/profile"><FontAwesomeIcon icon={faUser} />{username ? `${username}` : ''}</a></button>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header
