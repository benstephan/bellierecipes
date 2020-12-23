import React from 'react';
import './profilerecipes.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export class ProfileRecipes extends React.Component {
    state = {
        recipes: []
    }
    componentDidMount() {
        fetch(`http://localhost:4000/getData`)
            .then(res => res.json())
            .then((res) => {
                this.setState({ recipes: res })
            })

            .catch(console.log)
    }

    render() {
        let loginID = localStorage.getItem('loggedin');
        return (
            <div className="profile-recipe-list">
                {this.state.recipes.filter(recipe => recipe.author === loginID).map((recipe, i) => (
                    <div className="profile-recipe-list__card" key={i}>
                        <div className="profile-recipe-list__image"><img src={recipe.imageURL} alt={recipe.name} /></div>
                        <div className="profile-recipe-list__recipe-title">{recipe.name}</div>
                        <div className="profile-recipe-list__edit-buttons">
                            <button class="btn btn-danger"><FontAwesomeIcon icon={faTimes} /></button>
                            <button class="btn btn-success"><FontAwesomeIcon icon={faPencilAlt} /></button>
                        </div>
                    </div>
                ))}
            </div>

        )
    }
}


export default ProfileRecipes;
