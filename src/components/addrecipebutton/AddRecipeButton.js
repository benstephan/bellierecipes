import React from 'react';
import './addrecipebutton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export class AddRecipeButton extends React.Component {
    
    render() {
        return (
            <button className="add-recipe-button">
                <a href="/add-recipe">
                    <FontAwesomeIcon icon={faPlus} />
                </a>
            </button>
        )
    }
}


export default AddRecipeButton;
