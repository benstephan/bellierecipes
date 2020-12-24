import React, { Component } from 'react'
import './SearchForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

export default class SearchForm extends Component {
    render() {
        const hideSearch = () => {
            const searchBox = document.querySelector('.search-form');
            searchBox.classList.remove('show');
        }
        return (
            <div className="search-form">
                <button class="search-form__hide" onClick={hideSearch}><FontAwesomeIcon icon={faTimes} /></button>
                <form>
                    <fieldset>
                        <input
                            type="text"
                            name="recipe-image-url"
                            className="form-input"
                        />
                    </fieldset>
                    <fieldset>
                        <button type="submit" onClick={() => { }} className="btn btn-primary"><FontAwesomeIcon icon={faSearch} /></button>
                    </fieldset>
                </form>
            </div>
        )
    }
}
