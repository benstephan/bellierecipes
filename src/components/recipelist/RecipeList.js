import React from 'react';
import './recipelist.css';
import RecipeCard from '../recipecard/RecipeCard';

export class RecipeList extends React.Component {
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
    
    render() {
        return (
            <div className="recipe-list">
                <RecipeCard recipes={this.state.recipes} />
            </div>
            
        )
    }
}


export default RecipeList;
