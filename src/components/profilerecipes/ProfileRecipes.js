import React from 'react';
import RecipeCard from '../recipecard/RecipeCard';

export class ProfileRecipes extends React.Component {
    state = {
        recipes: []
    }
    componentDidMount() {
        const authorName = localStorage.getItem('name');
        fetch(`http://localhost:4000/getMyRecipes?author=${authorName}`)
        .then(res => res.json())
        .then((res) => {
            this.setState({ recipes: res })
        })

        .catch(console.log)
    }
    
    render() {
        return (
            <div className="profile-recipe-list">
                <RecipeCard recipes={this.state.recipes} />
            </div>
            
        )
    }
}


export default ProfileRecipes;
