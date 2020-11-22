import React, {setState} from 'react';
import './recipecard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const RecipeCard = ({ recipes }) => {

    return (
      recipes.map((recipe, i) => (

      <div className="recipe-card" style={ { backgroundImage: "url(" + recipe.imageURL + ")" } }>
        <div className="recipe-card__heart"><FontAwesomeIcon icon={faHeart} /></div>
        <a href={ `/recipe/${recipe.slug}` }>
          
          <div className="recipe-card__details">
              <h2>{recipe.name}</h2>
              
          </div>
        </a>
      </div>

      )
    )
)};
export default RecipeCard;

