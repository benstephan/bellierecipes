import React from 'react';
import ProfileRecipes from '../components/profilerecipes/ProfileRecipes';
class ProfilePage extends React.Component {
    
    render(){
        const name = localStorage.getItem('name');
        return (
            <>
            <div className="small-container">
                <h1>Profile Page</h1>
                {name ? `Hi, ${name}. These are your personal recipes and settings` : '<a href="/login">Please login</a>'}
                <ProfileRecipes />
            </div>
            </>
        )
    }
}

export default ProfilePage