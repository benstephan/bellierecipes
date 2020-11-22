import React from 'react';
import './recipedetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class RecipeDetails extends React.Component {
    state = {
        recipes: []
    }
    componentDidMount() {
        fetch('http://localhost:4000/getData')
        .then(res => res.json())
        .then((res) => {
            this.setState({ recipes: res })
        })

        .catch(console.log)
    }
    
    render(){

        let urlID = window.location.href.split('/').pop()

        return (
            <>
            {this.state.recipes.filter(recipe => recipe.slug===urlID).map((recipe, i) => (
                <div className="recipe-details small-container" key={i}>
                    <div className="recipe-details__header">
                        <div className="recipe-details__header__image">
                            <img src={recipe.imageURL} alt={recipe.name} />
                        </div>
                        <div className="recipe-details__header__title">
                            <h1>{recipe.name}</h1>
                            <button onClick={() => {}} className={recipe.favorite ? 'recipe-details__favorite' : 'recipe-details__not-favorite'}><FontAwesomeIcon icon={faHeart} /></button>
                        </div>
                    </div>
                    <div className="recipe-details__body">
                        <div className="recipe-details__ingredients">
                            <h3>Ingredients</h3>
                            <ul>
                                {recipe.ingredients.map((ingredient, j) => { 
                                    return <li key={j}>{ingredient.name.toString()}</li>
                                })}
                            </ul>
                        </div>
                        <div className="recipe-details__steps">
                            <h3>Steps</h3>
                            <ol>
                            {recipe.steps.map((step, s) => {
                                return <li key={s}>{step}</li>
                            })}
                            </ol>
                        </div>
                    </div>
                </div>
            ))}
            </>
        )
    }
}

export default RecipeDetails